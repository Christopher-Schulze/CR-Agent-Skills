# QA Report Template Reference

Use this as an internal evidence artifact during final verification for substantial UI. Do not dump it in the final response unless the user asks; summarize only the important evidence, deviations, and blockers.

## Contents

- Runtime Evidence
- Fidelity Ledger
- Density And Component Evidence
- Final Signoff

## Runtime Evidence

- App/runtime: command, URL, build/dev-server status, browser path, and any fallback reason.
- Viewports checked: desktop, current viewport, mobile, and concept-native dimensions when practical.
- References: accepted concept screenshots, section/detail concepts, user screenshots, current UI baseline, or existing design-system reference.
- QA artifacts: screenshot paths, `scripts/ui-qa-harness.mjs` output directory/report if used, QA signals, thresholds, console/page errors, overflow findings, text-density warnings, unlabeled-control warnings, and asset-load findings.

## Fidelity Ledger

Record at least five concrete comparison points for substantial concept-led UI.

| Point | Concept/reference evidence | Render evidence | Verdict/fix |
| --- | --- | --- | --- |
| Copy/nav/CTA |  |  |  |
| Layout/container model |  |  |  |
| Typography |  |  |  |
| Palette/gradients/assets |  |  |  |
| Spacing/responsive/motion |  |  |  |

## Density And Component Evidence

- Density/text-space verdict: chosen density posture, above-fold text budget, max visible priorities, quiet-space role, crowded/hollow risks, and repairs made.
- Component specimen table: inspect at least five rendered component families, or all families if fewer than five.

| Component | Owner/variant | States checked | Craft verdict | Fix |
| --- | --- | --- | --- | --- |
| Primary action |  |  |  |  |
| Secondary control/nav |  |  |  |  |
| Card/panel/row |  |  |  |  |
| Form/input/tab/filter |  |  |  |  |
| Status/chart/media/HUD |  |  |  |  |

- Typography audit: display, body, UI/control, label/caption, data/numeric, mobile wraps, and computed sizes when visual drift is suspected.
- Spatial composition audit: focal order, optical alignment, edge discipline, section rhythm, next-section preview, and mobile collapse.
- Asset/icon audit: image crop, temperature, edge treatment, icon metaphor, stroke/fill style, optical size, alignment, and load status.
- Interaction proof: primary path tested with real local state or real app state; selected/edited/filtered/submitted/confirmed/played/generated result recorded.
- Accessibility audit: keyboard reachability, visible focus, labels/aria names, semantic buttons/links/inputs, hover-only information, reduced-motion behavior.
- Technical visual QA: console errors, page errors, overflow/clipping, broken images, accidental scrollbars, stale debug artifacts, responsive text overflow, above-fold text density, longest text block, and unlabeled controls.

## Final Signoff

Answer before final:

- Would a great, highly skilled design agency sign off on this exact rendered implementation of the accepted design?
- What would still be fixed with 20 more minutes?
- Are any fixable issues still present? If yes, repair before final instead of reporting.
- If a blocker remains, name the concrete blocker, affected viewport/state, and smallest next action.
