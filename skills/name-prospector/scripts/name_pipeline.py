#!/usr/bin/env python3
"""Generate scored name candidates and optionally run first-pass RDAP checks."""

from __future__ import annotations

import argparse
import csv
import hashlib
import itertools
import json
import random
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from dataclasses import dataclass


PREFIXES = (
    "air", "alto", "arc", "astro", "bright", "clear", "coda", "core",
    "craft", "day", "deep", "ever", "field", "first", "flow", "forge", "fresh",
    "front", "glow", "grid", "halo", "harbor", "hatch", "kin", "luma", "lumen",
    "mesh", "metro", "mind", "near", "neo", "next", "north", "nova", "open",
    "orbit", "peak", "pilot", "prime", "pulse", "quick", "quiet", "rally",
    "root", "scale", "signal", "spark", "spring", "stack", "stride", "sync",
    "terra", "true", "vector", "vista", "wave", "wise", "zen",
)

SUFFIXES = (
    "able", "base", "beam", "board", "bot", "box", "bridge", "cast", "deck",
    "dock", "flow", "folio", "ful", "grid", "hub", "kit", "lane", "layer",
    "leaf", "lift", "line", "loop", "ly", "mate", "mind", "nest", "path",
    "pilot", "port", "press", "pulse", "room", "scope", "shift", "smith",
    "stack", "ster", "sync", "table", "trail", "vault", "way", "well", "works",
)

SYLLABLES = (
    "ba", "be", "bo", "ca", "ce", "co", "da", "de", "di", "do", "fa", "fi",
    "fo", "ga", "go", "ka", "ki", "la", "le", "lo", "ma", "mi", "mo", "na",
    "ne", "ni", "no", "pa", "pe", "pi", "po", "ra", "re", "ri", "ro", "sa",
    "se", "si", "so", "ta", "te", "ti", "to", "va", "ve", "vi", "vo", "za",
)

BAD_FRAGMENTS = {
    "ass", "die", "fraud", "hell", "kill", "scam", "sex", "shit", "suck",
    "terror", "xxx",
}

STOPWORDS = {
    "about", "after", "again", "also", "and", "app", "are", "assistant", "based",
    "best", "build", "business", "can", "company", "for", "from", "get", "has",
    "into", "make", "new", "not", "our", "product", "startup", "that", "the",
    "this", "tool", "use", "using", "with", "you", "your",
}


@dataclass(frozen=True)
class Candidate:
    name: str
    slug: str
    score: int
    style: str
    domains: str = ""
    domain_status: str = "not_checked"


def normalize_word(value: str) -> str:
    return re.sub(r"[^a-z0-9]", "", value.lower())


def title_name(slug: str) -> str:
    return slug[:1].upper() + slug[1:]


def stable_rng(seed_text: str) -> random.Random:
    digest = hashlib.sha256(seed_text.encode("utf-8")).hexdigest()
    return random.Random(int(digest[:16], 16))


def split_keywords(values: list[str]) -> list[str]:
    words: list[str] = []
    for value in values:
        words.extend(re.findall(r"[a-zA-Z0-9]+", value.lower()))

    seen: set[str] = set()
    result: list[str] = []
    for word in words:
        clean = normalize_word(word)
        if 2 < len(clean) < 16 and clean not in STOPWORDS and clean not in seen:
            result.append(clean)
            seen.add(clean)
    return result


def score_slug(slug: str, keywords: list[str]) -> int:
    length = len(slug)
    score = 100 - abs(length - 8) * 4

    if length < 4 or length > 14:
        score -= 30
    if re.search(r"(.)\1\1", slug):
        score -= 25
    if any(fragment in slug for fragment in BAD_FRAGMENTS):
        score -= 80
    if slug in keywords:
        score -= 25
    if any(keyword in slug for keyword in keywords):
        score += 10

    vowel_count = sum(1 for character in slug if character in "aeiou")
    vowel_ratio = vowel_count / max(length, 1)
    if vowel_count == 0:
        score -= 40
    if 0.25 <= vowel_ratio <= 0.6:
        score += 10

    return score


def add_candidate(rows: dict[str, Candidate], slug: str, style: str, keywords: list[str]) -> None:
    clean_slug = normalize_word(slug)
    if not clean_slug or clean_slug in rows:
        return
    if len(clean_slug) < 4 or len(clean_slug) > 18:
        return

    score = score_slug(clean_slug, keywords)
    if score < 35:
        return

    rows[clean_slug] = Candidate(
        name=title_name(clean_slug),
        slug=clean_slug,
        score=score,
        style=style,
    )


def generate_candidates(brief: str, keywords: list[str], count: int) -> list[Candidate]:
    rng = stable_rng(f"{brief}|{','.join(keywords)}")
    rows: dict[str, Candidate] = {}
    roots = keywords + list(PREFIXES)

    for keyword in keywords:
        add_candidate(rows, keyword, "keyword", keywords)
        for suffix in SUFFIXES:
            add_candidate(rows, keyword + suffix, "keyword_suffix", keywords)
        for prefix in PREFIXES:
            add_candidate(rows, prefix + keyword, "prefix_keyword", keywords)

    for left, right in itertools.product(roots, list(SUFFIXES) + keywords):
        if left != right:
            add_candidate(rows, left + right, "compound", keywords)

    random_attempts = max(count * 4, 1000)
    for _ in range(random_attempts):
        pieces = [rng.choice(SYLLABLES) for _ in range(rng.choice((2, 3, 3, 4)))]
        add_candidate(rows, "".join(pieces), "coined", keywords)
        add_candidate(rows, rng.choice(PREFIXES) + "".join(pieces[:2]), "prefix_coined", keywords)
        add_candidate(rows, "".join(pieces[-2:]) + rng.choice(SUFFIXES), "coined_suffix", keywords)

    return sorted(rows.values(), key=lambda item: (-item.score, len(item.slug), item.slug))[:count]


def rdap_url(domain: str) -> str:
    return "https://rdap.org/domain/" + urllib.parse.quote(domain)


def check_domain(domain: str, timeout: float) -> str:
    request = urllib.request.Request(
        rdap_url(domain),
        headers={"User-Agent": "name-prospector/1.0"},
    )
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            if response.status == 200:
                return "registered"
            return f"unclear_http_{response.status}"
    except urllib.error.HTTPError as exc:
        if exc.code == 404:
            return "likely_available"
        return f"unclear_http_{exc.code}"
    except Exception:
        return "unclear"


def attach_domain_status(
    candidates: list[Candidate],
    tlds: list[str],
    limit: int,
    timeout: float,
    delay: float,
) -> list[Candidate]:
    checked: list[Candidate] = []
    for index, candidate in enumerate(candidates):
        domains = [f"{candidate.slug}.{tld}" for tld in tlds]
        statuses: list[str] = []

        if index < limit:
            for domain in domains:
                status = check_domain(domain, timeout)
                statuses.append(f"{domain}:{status}")
                if delay > 0:
                    time.sleep(delay)
            domain_status = "likely_available" if any(
                status.endswith(":likely_available") for status in statuses
            ) else "registered_or_unclear"
        else:
            statuses = [f"{domain}:not_checked" for domain in domains]
            domain_status = "not_checked"

        checked.append(
            Candidate(
                name=candidate.name,
                slug=candidate.slug,
                score=candidate.score,
                style=candidate.style,
                domain_status=domain_status,
                domains=";".join(statuses),
            )
        )

    return checked


def write_output(candidates: list[Candidate], path: str, fmt: str) -> None:
    fields = ["name", "slug", "score", "style", "domain_status", "domains"]

    if fmt == "json":
        data = [{field: getattr(candidate, field) for field in fields} for candidate in candidates]
        payload = json.dumps(data, indent=2)
        if path == "-":
            print(payload)
            return
        with open(path, "w", encoding="utf-8") as handle:
            handle.write(payload + "\n")
        return

    handle = sys.stdout if path == "-" else open(path, "w", newline="", encoding="utf-8")
    try:
        writer = csv.DictWriter(handle, fieldnames=fields)
        writer.writeheader()
        for candidate in candidates:
            writer.writerow({field: getattr(candidate, field) for field in fields})
    finally:
        if handle is not sys.stdout:
            handle.close()


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate and screen brand-name candidates.")
    parser.add_argument("--brief", required=True, help="Short description of the product/company to name.")
    parser.add_argument("--keywords", nargs="*", default=[], help="Seed words or phrases.")
    parser.add_argument("--count", type=int, default=2000, help="Number of candidates to output.")
    parser.add_argument("--tlds", default="com,ai,io,co,app", help="Comma-separated TLDs to prepare/check.")
    parser.add_argument("--check-domains", action="store_true", help="Perform first-pass RDAP checks.")
    parser.add_argument("--limit-domain-checks", type=int, default=200, help="Number of top names to RDAP-check.")
    parser.add_argument("--timeout", type=float, default=5.0, help="RDAP request timeout in seconds.")
    parser.add_argument("--delay", type=float, default=0.1, help="Delay between RDAP requests.")
    parser.add_argument("--output", default="-", help="CSV/JSON output path, or '-' for stdout.")
    parser.add_argument("--format", choices=["csv", "json"], default="csv", help="Output format.")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    keywords = split_keywords(args.keywords + [args.brief])
    candidates = generate_candidates(args.brief, keywords, max(1, args.count))
    tlds = [normalize_word(tld) for tld in args.tlds.split(",") if normalize_word(tld)]

    if args.check_domains:
        candidates = attach_domain_status(
            candidates,
            tlds,
            min(args.limit_domain_checks, len(candidates)),
            args.timeout,
            args.delay,
        )
    else:
        candidates = [
            Candidate(
                name=item.name,
                slug=item.slug,
                score=item.score,
                style=item.style,
                domain_status=item.domain_status,
                domains=";".join(f"{item.slug}.{tld}:not_checked" for tld in tlds),
            )
            for item in candidates
        ]

    write_output(candidates, args.output, args.format)


if __name__ == "__main__":
    main()
