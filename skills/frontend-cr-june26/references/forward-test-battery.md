# Forward Test Battery Reference

Use this only when revising or proving the skill itself. Do not load it during ordinary UI implementation unless the user explicitly asks for a skill evaluation.

## Contents

- Test Protocol
- Prompt Battery
- Scoring Sheet
- Failure Capture
- Pass Standard

## Test Protocol

- Use fresh agent sessions when available. The test prompt should look like a real user request, not a skill-review instruction.
- Pass the skill name/path and the task. Do not pass the intended fix, expected answer, suspected failure, or previous diagnosis.
- Preserve raw artifacts: prompt, resulting concept notes, generated screenshots if any, implementation screenshots, QA notes, and final answer.
- Score the output before reading other runs. Do not tune the rubric around the best result.
- After 3 or more related failures, update `failure-taxonomy.md`, `golden-quality-examples.md`, or the relevant surface reference instead of adding more generic admonitions to `SKILL.md`.

## Prompt Battery

| ID | Surface | Prompt shape | What it should prove |
| --- | --- | --- | --- |
| FT-01 | SaaS product page | Build a product page for an AI invoice reconciliation tool for finance teams. | Avoid generic SaaS hero, prove workflow/object, restrained proof, real copy. |
| FT-02 | Operations dashboard | Build a fleet maintenance command center for regional logistics managers. | Choose table/queue/timeline/map logic, no marketing hero, dense but scannable. |
| FT-03 | Editor/canvas | Build a browser-based podcast episode editor with transcript, clips, and export. | Work product primary, quiet chrome, stateful controls, precise UI typography. |
| FT-04 | Mobile transaction | Build a mobile booking flow for a premium physical therapy clinic. | Trust, recovery, one decision per screen, tactile selector, strong confirmation. |
| FT-05 | Luxury/consumer | Build a launch page for a high-end modular desk lamp. | Object/material-led first viewport, no fake app panels, sparse but crafted components. |
| FT-06 | Data-heavy tool | Build a security incident triage console for SOC analysts. | Semantic status, filters, selected detail, no decorative charts. |
| FT-07 | Game | Build a playable browser game about navigating a delivery drone through wind tunnels. | Loop before art, readable hazards/rewards, generated art asset plan, real controls. |
| FT-08 | Content-heavy | Build an editorial explainer site for a climate-risk dataset. | Reading rhythm, data proof, no walls of text, no decorative cards. |

## Scoring Sheet

Score 1-5 using `score-anchors.md`.

| Dimension | Required average | Hard fail below |
| --- | --- | --- |
| Subject fit | 4.2 | 4 |
| First viewport thesis | 4.2 | 4 |
| Copy/content realism | 4.0 | 4 |
| Density/text-space balance | 4.0 | 4 |
| Component craft | 4.0 | 4 |
| Spatial composition | 4.0 | 3 |
| Interaction realism | 4.0 | 3 |
| Implementation feasibility | 4.2 | 4 |

Also record: strongest visual moment, weakest component, invented scope, generic residue, mobile risk, and final agency-signoff verdict.

## Failure Capture

For each failed run, record:

- Prompt ID and exact prompt.
- Where the run first drifted: concept brief, Image Gen acceptance, design-system extraction, implementation, QA, or final answer.
- Concrete artifact evidence: screenshot, line, copy string, component, layout area, or QA signal.
- Diagnosis using `failure-taxonomy.md`.
- Smallest skill/resource change that would likely prevent the failure next time.

## Pass Standard

- No critical dimension below 4 across the battery.
- No repeated failure category appears 3 or more times.
- No output ships raw/default component-library primitives.
- No output wins by adding extra pages or unrelated scope.
- At least 5 of 8 runs have a subject-specific first viewport that would still be recognizable with copy hidden.
- Harness or browser QA catches overflow, broken assets, console errors, and obvious text-density issues before final.
