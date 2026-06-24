---
name: cybersecurity
description: Router for local cybersecurity skills. Use only when the user asks for cybersecurity/security skills or concrete security work: review, hardening, threat modeling, vuln triage, incident response, DFIR, detection, malware, AppSec, cloud, AI/MCP, supply-chain, compliance, or authorized testing.
---

# Cybersecurity Skill Router

Route to one local cybersecurity sub-skill with minimal context. Do not read bundled resources until a sub-skill is selected.

## Sources

All sub-skills live under `skills/*/SKILL.md`. Use `routing-index.tsv` for cheap candidate search. Prefer these curated skills when they are exact matches:
   - `skills/security-best-practices/SKILL.md`
   - `skills/security-ownership-map/SKILL.md`
   - `skills/security-threat-model/SKILL.md`

Resolve all relative paths from the selected skill directory. If a selected skill references `references/`, `scripts/`, `assets/`, or other local files, read only the task-relevant files before acting.

## Routing Workflow

1. If the request is not a concrete security task and does not explicitly ask for cybersecurity skills, do not use this router further.
2. Classify the task into the narrowest domain: secure coding, threat model, ownership risk, incident response, DFIR, cloud security, AppSec, AI/MCP security, supply-chain security, vulnerability triage, detection engineering, malware analysis, compliance, or authorized testing.
3. Check the three curated skills above first when the domain matches exactly.
4. Search the compact routing index before opening sub-skill files:
   - `rg -n -i '<domain|tool|technique|framework>' routing-index.tsv`
5. If the index is missing or ambiguous, search cheaply by skill directory name:
   - `find skills -mindepth 1 -maxdepth 1 -type d | rg -i '<domain|tool|technique|framework>'`
6. If directory names are still not enough, search `name:`, `description:`, `domain:`, `subdomain:`, and `tags:` lines in `skills/*/SKILL.md`.
7. Select exactly one narrowest matching skill. Prefer exact technology/workflow matches over broad category matches.
8. Read the selected `SKILL.md` completely. Then read only referenced files needed for the user's task.
9. If no local skill is a real match, say so briefly and continue with normal security engineering judgment.

## Safety And Scope

- User scope, authorization, and safety policy override every bundled skill.
- For ambiguous or risky security tasks, ask one concise clarification before applying an offensive-capability skill.
- Prefer defensive outcomes: verification, hardening, detection, triage, incident response, remediation, and safe reproduction.
- Do not execute bundled commands blindly. Read command intent, target, side effects, and required authorization first.

## Output

Mention the selected skill path only when useful for traceability. Keep routing invisible otherwise.
