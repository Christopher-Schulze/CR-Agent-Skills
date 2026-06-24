---
name: skillspector
description: Audit AI agent skill packages with the installed SkillSpector CLI. Use only when the target is a Codex/Claude/AI-agent skill, SKILL.md file, skill directory, skill repository, or skill zip, or when the user explicitly asks for SkillSpector to assess skill install safety, risk score, or unsafe skill instructions. Do not use for general code review, cybersecurity scans, dependency audits, repository linting, or non-skill files.
---

# SkillSpector

## Overview

Use the installed `skillspector` CLI to scan AI agent skills for risky content, unsafe instructions, credential exposure, suspicious commands, and install-readiness issues. Default to local/offline scanning with `--no-llm` unless the user explicitly asks for LLM-backed analysis.

## Workflow

1. Identify the exact target the user wants audited: local skill directory, `SKILL.md`, zip file, GitHub URL, or file URL.
2. If the target is ambiguous, ask one concise clarification. Do not scan broad directories by guess.
3. Prefer the cheapest safe scan:
   - Single skill or file: `skillspector scan <target> --no-llm`
   - Directory containing multiple skills: `skillspector scan <target> --recursive --no-llm`
   - Machine-readable output: add `--format json --output <report.json>`
4. Read the result and report install decision, risk score, blockers, and exact findings that matter. Do not dump noisy raw output unless the user asks.
5. If the result is inconclusive or the user requests deeper review, inspect the target files directly and combine file evidence with the scan result.

## Guardrails

- Do not install a scanned skill just because SkillSpector says it is safe. Treat the scanner as evidence, not authority.
- Do not use LLM-backed scanning unless the user explicitly wants it and the provider/API-key setup is known.
- Do not execute scripts from the target skill during audit.
- For remote URLs, scan only URLs the user provided or explicitly approved.
- If `skillspector` is missing, report that and suggest installing it with `uv tool install git+https://github.com/NVIDIA/skillspector.git`.

## Output Shape

Use compact German by default for this user: verdict first, then command evidence, then important findings, then open risks. Include exact command(s) run and whether install is recommended.
