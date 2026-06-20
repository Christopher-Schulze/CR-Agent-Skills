# Forward Testing Reference

Use this reference when maintaining or evaluating Frontend App Builder itself. Do not load it during ordinary app builds unless the user asks to test the skill.

## Method

- Use fresh runs where possible. The tester should receive the skill and a user-like task, not the expected diagnosis.
- Pass raw task prompts, assets, or repo paths. Do not leak intended fixes.
- Evaluate concept quality, implementation plan, rendered output, and verification behavior.
- Prefer artifacts: generated concepts, screenshots, diffs, console output, QA ledgers, and final responses.
- Run the full prompt set, or at least 5 hard prompts, before treating a major wording change as proven.
- Tighten the skill from repeated failure patterns and artifact evidence, not intuition, taste claims, or one subjective miss.
- Prefer routing, sharper gates, and better verification loops over adding broad prose.

## Test Prompts

1. Blank-slate SaaS landing page: "Build a landing page for a startup that audits AI support conversations for compliance teams."
2. Dense dashboard: "Build an operations dashboard for a regional urgent-care network monitoring patient wait times, staffing, and escalations."
3. Editor/canvas tool: "Build a browser UI for a packaging label editor with layers, selected object controls, and export."
4. Mobile transaction flow: "Build a mobile-first booking flow for private chef dinners with date, menu, guest count, payment review, and confirmation."
5. Branded consumer page: "Build a premium product page for a compact espresso machine with real product focus, not SaaS styling."
6. Small game: "Build a playable browser game where a courier avoids traffic cones and collects delivery tokens."

## Scorecard

Score each dimension from 1-5. A revision should improve the median without making the skill verbose or brittle.

| Dimension | 1 | 3 | 5 |
| --- | --- | --- | --- |
| Subject fit | Generic category UI | Some domain signals | Visual thesis only fits this product |
| Direction quality | One default style | Clear but safe | Distinct, coherent, justified risk |
| Layout | Template pattern | Solid hierarchy | Excellent spatial rhythm and scan path |
| Typography | Browser/default feel | Competent hierarchy | Strong personality with precise controls |
| Content realism | Placeholder data/copy | Plausible basics | Domain-specific, edge-case aware |
| State coverage | Mostly static | Core states | Complete state matrix for workflow |
| Component system | One-off markup | Some reuse | Clean primitives, tokens, variants |
| Motion | Decorative or absent | Useful basics | Purposeful storyboard with restraint |
| Fidelity QA | Build-only | Screenshot check | View-image comparison plus repair ledger |
| Final polish | Accepts roughness | Fixes obvious issues | Senior design review would sign off |

## Pass Criteria

- Each prompt produces a different visual direction grounded in the subject.
- Complex surfaces produce state matrices and realistic content before coding.
- Implementation uses reusable components and tokens rather than one-off styling.
- Complex implementations name their component architecture, primitive owners, and variants before coding.
- No raw/default component-library primitives remain in the rendered UI.
- Browser screenshots pass desktop and mobile review.
- Final response includes concept path, screenshot method, `view_image` comparison, ledger summary, and remaining deviations.

## Failure Patterns To Fix

- Same hero/card/grid style across unrelated prompts.
- Concept accepted without subject-specific thesis.
- Fake data, fake metrics, generic status labels, or decorative dashboards.
- Missing mobile behavior for dense regions.
- Inert controls presented as product behavior.
- Visual QA stops after build success.
- Raw shadcn/ui or other component-library defaults appear as finished UI.
- Component architecture collapses into one giant screen component or duplicated wrappers.
- The strongest viewport is usable but not memorable, subject-specific, or beyond normal AI-generated UI.
- The skill grows with duplicate prose instead of better routing or references.
