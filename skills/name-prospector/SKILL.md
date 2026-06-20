---
name: name-prospector
description: Generate large batches of brand, product, app, startup, domain, and company name candidates; score and filter names; prepare or check likely domain availability; research similar-name competitors; and produce ranked naming shortlists with caveats. Use when Codex is asked to brainstorm names at scale, validate naming options, check .com/.ai/.io/.app or other TLDs, avoid name collisions, compare competitors with similar names, or recommend defensible brand-name finalists.
---

# Name Prospector

## Overview

Use this skill to move from a naming brief to a ranked shortlist: generate many candidates, normalize domain-safe slugs, score the options, optionally run first-pass RDAP checks, then research finalist collisions with live sources.

Treat domain, competitor, social-handle, and trademark status as time-sensitive. Never claim legal clearance; label findings as `likely available`, `registered`, `premium/aftermarket`, `unclear`, or `needs legal review`.

## Workflow

1. Clarify only missing essentials: naming target, audience, category, tone, restricted words, geography, preferred TLDs, and must-have concepts.
2. Generate broadly with `scripts/name_pipeline.py`. Start with 1,000-5,000 candidates unless the user asks for a different volume.
3. Filter weak names: hard spelling, awkward pronunciation, hyphens/numbers, obvious negative meanings, generic terms, and names close to famous brands.
4. Check domain signals live. Prefer registrar pages, RDAP/WHOIS, ICANN lookup, registry APIs, direct DNS/HTTP visits, and web search. Use the script's `--check-domains` only as a first pass.
5. Search similar-name competitors for each finalist: exact quoted name, quoted name plus category, domain slug, fuzzy variants, homophones, app stores, Product Hunt, GitHub, LinkedIn, Crunchbase, Google, Bing, local directories, and relevant industry directories.
6. Rank finalists by fit, memorability, spelling, pronunciation, domain signal, collision risk, and expansion room.
7. Return a compact table plus caveats and next checks.

## Generator

Run the bundled generator directly:

```bash
python3 /path/to/name-prospector/scripts/name_pipeline.py \
  --brief "AI assistant for real estate agents" \
  --keywords real estate agents listings CRM followup \
  --count 3000 \
  --tlds com,ai,io \
  --output /tmp/name-prospector.csv
```

For a first-pass domain screen:

```bash
python3 /path/to/name-prospector/scripts/name_pipeline.py \
  --brief "privacy-first calendar app for founders" \
  --keywords calendar focus schedule founder \
  --count 1500 \
  --tlds com,app,io \
  --check-domains \
  --limit-domain-checks 250 \
  --output /tmp/name-prospector.csv
```

Use the CSV to pick finalists for deeper web research. The script is deterministic for the same brief and keyword list. Domain checks call RDAP only when `--check-domains` is set.

## Domain Rules

- Never rely on memory for domain availability.
- Check at least two live sources for finalists.
- Treat RDAP errors, rate limits, premium pages, parked pages, and unsupported TLDs as uncertainty.
- Check realistic variants: singular/plural, dropped vowels, `get{name}`, `try{name}`, `{name}app`, and important TLDs.
- Recommend trademark counsel for commercial launches, regulated markets, and names near existing brands.

## Competitor Search

For each finalist, search:

- Exact quoted name: `"Name"`
- Exact quoted name plus category: `"Name" "project management"` or `"Name" "fintech"`
- Domain slug: `nameslug.com`, `nameslug app`, `nameslug startup`
- Similar spellings, fuzzy variants, and homophones.
- App stores, Product Hunt, GitHub, LinkedIn, Crunchbase, Google, Bing, local business directories, and relevant industry directories when useful.

Prioritize collision risk by market proximity, not raw result count.

## Output

Prefer this table:

| Rank | Name | Domains checked | Competitor signal | Why it works | Risk |
|---|---|---|---|---|---|

Include:

- Best 5-15 names.
- Domain evidence with links for finalists.
- Competitor findings with source links and collision level: `direct`, `adjacent`, `distant`, or `noise`.
- Names to avoid and why.
- Next checks: trademark search, registrar purchase, social handles, pronunciation test.

## Resources

- `scripts/name_pipeline.py`: generate, score, slugify, export, and optionally RDAP-check candidates.
- `references/research-checklist.md`: read before deeper domain, competitor, trademark, or social-handle research.
