# Failure Taxonomy Reference

Use this when a concept, implementation, or screenshot feels weak but the cause is not yet precise. Diagnose the failure, then repair the cause.

## Contents

- Concept Failures
- Implementation Failures
- QA Failures
- Repair Rules

## Concept Failures

| Symptom | Likely cause | Repair |
| --- | --- | --- |
| Generic premium first viewport | Direction chosen from style adjectives, not product artifacts | Rewrite thesis around workflow/object/data/environment; choose a style archetype and rejected default. |
| Pretty but could fit another product | Subject signals are copy-only | Add domain-specific focal object, artifact, data shape, material, or task state. |
| Crowded opening screen | No priority budget | Keep one focal point, one support unit, one action cluster, one proof/detail; demote or split the rest. |
| Hollow minimalist screen | Fewer elements without higher component craft | Add richer typography, material detail, state, asset, or product proof; do not add filler cards. |
| Basic components | Brief did not specify component craft and states | Require crafted buttons/inputs/cards/rows/nav with default, hover, focus, selected, disabled, loading/error where relevant. |
| Fake sophistication | Decorative badges, charts, glows, or labels carry no workflow meaning | Replace decoration with semantic status, real proof, useful data, or remove it. |
| Style soup | Multiple archetypes blended | Pick one primary archetype and one minor accent at most; remove conflicting motifs. |
| Weak copy | Generated filler or claims are accepted as production content | Build copy authority and above-fold copy lock; strip unverified claims. |

## Implementation Failures

| Symptom | Likely cause | Repair |
| --- | --- | --- |
| Render drifts from concept | No contract extracted before coding | Rebuild from concept contract: tokens, type roles, components, assets, state, responsive plan. |
| Raw shadcn/Tailwind smell | Library primitive used as finished design | Tokenize/variant the primitive; style typography, padding, radius, border, states, and icons. |
| Inconsistent repeated controls | Copy-pasted class chains | Create one primitive owner and named variants; remove parallel families. |
| Over-nested cards | Container model ignored | Use the concept's bands, rails, lists, tables, canvases, or open layout instead of adding panels. |
| Typography feels default | UI/control text inherits body defaults | Define roles for display, body, labels, controls, data, captions, and mobile wraps. |
| Asset feels pasted | Crop, light, temperature, edge, or shadow mismatches | Regenerate/isolate asset, adjust frame/aspect/background, or replace with coherent asset pass. |
| Mobile collapse is ugly | Desktop layout was implemented first without responsive contract | Define mobile priority order, line breaks, fixed-format regions, overflow strategy, and CTA reach. |
| Interaction feels fake | Controls do not change meaningful state | Add selected/edited/filtered/submitted/confirmed/played/generated state or record intentional static scope. |

## QA Failures

| Signal | Meaning | Repair |
| --- | --- | --- |
| Horizontal overflow | Layout or fixed-width child breaks viewport | Inspect offending elements, add responsive constraints, wrap text, or change grid/container model. |
| High above-fold text chars | Copy density may be too high | Shorten, group, move downstream, or replace text with visual proof. |
| Long text block | Paragraph is doing too much | Split into heading/support/detail, shorten, or convert to structured UI. |
| Unlabeled controls | Accessibility and icon-only affordance risk | Add visible label or aria-label; verify keyboard/focus path. |
| Broken images | Asset path/build issue | Fix import/path/public location and verify natural dimensions. |
| Console/page errors | Runtime instability | Fix root cause before visual signoff. |

## Repair Rules

- Repair the first cause in the chain, not the easiest visible symptom.
- If the concept is weak, regenerate or revise before faithfully implementing it.
- If implementation is weak but concept is strong, return to the extracted design system and component contract.
- If QA signals fire, inspect visually; the harness is a smoke detector, not the final design judge.
- If the same failure appears twice in one task, stop adding local fixes and revise the system primitive, token, or concept contract.
