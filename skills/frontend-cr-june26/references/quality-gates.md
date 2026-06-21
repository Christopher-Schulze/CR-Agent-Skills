# Quality Gates Reference

Use this reference before implementation and during final verification for substantial UI. These gates convert taste into enforceable checks. Use `score-anchors.md` when a verdict is ambiguous, `failure-taxonomy.md` when the weakness is hard to diagnose, `golden-quality-examples.md` when calibration is fuzzy, and `qa-report-template.md` when a written evidence artifact is needed.

## Component Integrity Gate

- Every repeated UI family must have a primitive owner: button, input, tab, row, panel, card, dialog, toolbar item, status token, chart frame, media frame, or canvas control.
- Name the variants before coding: size, density, tone, selected, disabled, loading, destructive, warning, success, priority, and surface context where relevant.
- Repeated controls must use the same primitive or explicit variant, not copied markup with local style drift.
- More than 2-3 local Tailwind/class overrides on repeated controls means the primitive or token model is wrong. Fix the system before adding more overrides.
- When no user or repo component system wins, React/Tailwind surfaces should default to current stable shadcn/ui. Use it as a styled, tokenized component base, not as a raw component dump.
- Raw, unstyled, default-looking components fail this gate. The component system must look intentionally designed for the accepted concept while staying architecturally unified.
- Wrapper components that only add styling are suspicious; prefer a real primitive variant or shared layout primitive.
- One-off styling is allowed only for accepted-concept fidelity and must remain isolated, named, and justified.

## Implementation Translation Gate

- Translate the accepted concept through a real system: product thesis -> tokens -> typography roles -> primitive owners -> variants -> section/state modules -> interaction proof.
- Do not implement directly from image to page-specific markup when repeated anatomy exists. Repeated anatomy needs a primitive owner or shared layout primitive.
- Similar appearance with different meaning should become semantic variants, not copied class chains.
- Similar meaning with different appearance should be reconciled into tokenized states, not parallel component families.
- Arbitrary values are allowed only for isolated fidelity exceptions. Repeated arbitrary values mean the design system is missing a token, scale, or variant.
- If a faithful implementation would require fragile hardcoded dimensions, static screenshot UI, hidden overflow hacks, or override chains, revise the component plan or simplify the concept before coding.
- Generated assets must be translated as production assets: crop, aspect ratio, background temperature, edge softness, transparency, shadow, lighting, and surrounding spacing must match the accepted visual world.

## Styling Conflict Gate

- Audit duplicated selectors/classes, contradictory Tailwind utilities, inherited browser/control typography, specificity fights, and responsive classes that cancel the intended layout.
- Repeated class chains that fight tokens or variants mean the component system needs repair, not another local override.
- If the browser screenshot looks close but computed styles reveal conflicting layout, spacing, color, typography, or responsive rules, fix the conflict before final polish.

## Spatial Composition Gate

- Focal hierarchy: the first eye target, second target, and action target must be obvious within five seconds.
- Spatial excellence: the viewport should feel deliberately composed, not merely arranged; scale, negative space, rhythm, and section sequencing must support the product thesis.
- Optical alignment: edges, baselines, icon centers, media frames, and control groups must feel intentionally aligned, not merely grid-snapped.
- Breathing room: whitespace must separate decisions and content groups; it must not be empty filler or accidental gaps.
- Density rhythm: dense and open areas should alternate deliberately; do not repeat the same block formula down the page.
- Edge discipline: large surfaces need deliberate outer margins, gutters, section starts, section endings, and viewport edges.
- Section transitions: adjacent sections should connect through shared gutters, bands, type rhythm, color cadence, media framing, or motion.
- Mobile line breaks: headings, CTAs, nav, controls, table cells, labels, and error text must wrap intentionally.
- Next-section preview: landing/product first viewports should hint at what follows unless the accepted concept clearly does otherwise.

## Composition Decision Gate

- One focal point per viewport. Secondary objects may support it, but they must not compete with the primary product signal or action.
- Asymmetry needs counterweight: media mass, type scale, whitespace, rail, object crop, or color field must balance the composition optically.
- Negative space must frame priority. Empty space that does not improve comprehension, luxury, rhythm, or focus is just a gap.
- Repetition needs variation in at least one dimension: density, alignment, scale, media ratio, content type, or interaction state. Repeating the same centered block or card grid fails.
- Every section must change user understanding, trust, decision state, or task progress. Remove or redesign sections that only provide visual rhythm.
- The first viewport needs a product/world signal, clear action, and a hint of continuation unless the accepted concept intentionally uses a self-contained tool canvas or game surface.
- Edge discipline matters: outer margins, gutters, section starts, section endings, and mobile safe areas must feel designed rather than incidental.

## Density And Overload Gate

- Choose the intended density posture before judging the screen: quiet utility, balanced product, editorial premium, dense operations, focused editor, mobile transaction, or game playfield.
- A viewport fails when it has more than 3-4 competing priorities at first glance. Repair by removing, grouping, demoting, splitting, shortening copy, or giving one product object clear dominance.
- A viewport also fails when it is clean only because it is empty. Quiet space must carry focus, luxury, rhythm, separation, or comprehension. Blankness without component craft is under-designed.
- Landing/product first viewports should usually keep copy and controls disciplined: one headline, one support unit, one action cluster, optional single proof detail, and one dominant visual/product signal.
- Product sections should usually carry one idea per section. If a section needs multiple paragraphs, many bullets, several cards, and multiple visuals to explain itself, it needs stronger hierarchy or less content.
- Dashboards may be dense with structured information, not dense with prose. Tables, statuses, grouping, columns, rows, timelines, maps, and inspectors should carry scan value faster than text blocks.
- Editors must keep the work product visually primary. If chrome, sidebars, helper text, or panels dominate the canvas/document/media, reduce or quiet them.
- Mobile screens should usually ask for one decision or one step. If copy pushes the primary action or confirmation below comfortable reach, cut or restructure.
- Games must reserve space for player, hazards, rewards, goals, route readability, and HUD clarity. Decorative scene detail cannot crowd gameplay.

## Text Economy Gate

- Every visible text block must improve orientation, decision-making, trust, recovery, state comprehension, or action. If it only fills rhythm, remove it.
- Prefer one sharp sentence over a paragraph, and a visual proof over a bullet list when the visual can carry the point.
- Above the fold, avoid multi-paragraph explanations, duplicated claims, repeated CTA wording, stacked badge/pill/proof rows, and generic benefit lists unless supplied by the user or required by the product.
- Labels and helper text must be concrete and user-side. Vague words like smart, seamless, powerful, next-gen, intuitive, scalable, and optimized need product-specific proof or removal.
- Dense data surfaces can use many labels and values, but they must be short, aligned, grouped, and scan-oriented.
- Error, empty, success, and confirmation copy must be concise but complete: what happened, what changed, or what to do next.

## Component Craft Gate

- Every visible component family must look custom-finished for the accepted design system, not merely functional. "Okay", "basic", "standard", and raw component-library styling fail.
- Inspect buttons, inputs, tabs, nav items, cards/panels, toolbar controls, table rows, chart frames, badges/status tokens, modals, empty states, notifications, command items, game HUD, and mobile controls.
- Each component needs deliberate typography, padding, radius, border, surface, shadow/elevation, icon alignment, state styling, focus treatment, disabled/loading/error/success behavior where relevant, and responsive wrapping.
- The weakest repeated component determines the perceived quality of the entire UI. Find it and fix it before final.
- If a component would still look plausible in a default shadcn/ui, Tailwind, or browser demo after changing colors, it is not crafted enough.
- Component quality must be style-coherent. A polished component from the wrong visual world is still a mismatch.
- Prefer fewer component families with higher craft over many mediocre modules.

## Component Specimen Pass

Before final response for substantial UI, inspect at least five concrete component specimens from the rendered product, or every component family if fewer than five exist.

- Name the primitive owner or shared component for each specimen.
- Check default, hover, focus, selected/active, disabled, loading, error/success, and responsive behavior when relevant.
- Check typography, optical alignment, icon treatment, padding, surface, border, radius, shadow, and mobile wrapping.
- Identify the weakest specimen and repair it before final handoff. Do not merely report that it is weak when it is feasible to fix.

## Typography Excellence Gate

- Typography must have separate roles for display, body, UI/control text, labels/captions, data/numeric values, and mobile line breaks where relevant.
- Display type carries identity. UI/control type carries precision. Data type carries scan speed. Do not let all text inherit the same default size, weight, and line height.
- H1 and hero copy line breaks must be actively designed on desktop and mobile. Awkward single-word lines, cramped wraps, or swallowed CTAs fail.
- Buttons, tabs, filters, sidebars, toolbar controls, inspector fields, table cells, chart labels, status tokens, command items, and mobile controls need deliberate font size, weight, line height, and casing.
- Numeric/data-heavy surfaces need consistent numeric rhythm: alignment, tabular figures where supported, status/value hierarchy, and readable chart/table labels.
- Label casing and action vocabulary must be consistent across nav, controls, statuses, empty states, errors, and confirmations.
- If typography looks interchangeable with a default Tailwind/shadcn demo after removing colors, it is not sophisticated enough.

## First-Use Comprehension Gate

- Within five seconds, the intended user should understand what this is, what matters first, what action is available, and what state/result the UI is showing.
- If the first viewport is visually impressive but the product, workflow, action, or current state is unclear, repair hierarchy, copy, data, and primary action before final.

## Premium Finish Gate

- The first impression must feel premium for the intended surface: controlled typography, deliberate spacing, styled controls, coherent material treatment, high-quality assets, and a clear product-specific signal; when the surface supports it, one signature moment.
- Above the fold or in the first visible viewport, the UI must look better than merely solid. If it feels only okay, competent, or generic, repair hierarchy, typography, spacing, imagery, component styling, and the primary product signal before final.
- Aim for a heads-turning, product-specific moment when the surface can support it. This is not mandatory for quiet utility or dense operational surfaces; when spectacle would hurt the task, make the standout quality come from precision, restraint, clarity, and exact product fit.
- Reject before final if the UI feels cheap, raw, generic, stock-like, default-component-driven, visually noisy without purpose, or under-designed for the product's audience and workflow.
- Premium means considered, precise, and product-appropriate; it does not mean maximum decoration, luxury styling everywhere, or ignoring a utilitarian user brief.

## Motion System Contract

- Choose the motion implementation explicitly: Framer Motion, repo-native motion, Motion One, CSS transitions, View Transitions, canvas/Three.js loop, or no motion.
- In React greenfield, prefer Framer Motion when animation is meaningful and the dependency is justified; otherwise use existing or simpler motion.
- Define duration bands: microinteraction, entrance/reveal, panel/modal, page/section transition, and game/canvas loop if relevant.
- Define easing character: precise, soft, springy, mechanical, premium, playful, or utilitarian.
- Include one entrance/reveal pattern, one interaction/state transition pattern, and one optional product-tactility moment. Motion must feel choreographed, not attached; every cue must map to hierarchy, state, product tactility, navigation, or comprehension.
- Use transform and opacity by default. Do not animate layout-shifting width, height, padding, border width, or flow-dependent properties unless there is a concrete reason and it is verified.
- Respect `prefers-reduced-motion`; the reduced-motion version must still communicate state clearly.
- Keep animation cheap: avoid constant decorative loops, expensive blur/filter animation, large repaints, and animation that competes with reading or task completion.

## Accessibility Gate

- Keyboard navigation must reach every interactive control in a predictable order.
- Focus rings must be visible against the actual rendered background.
- Buttons must be buttons, links must be links, and inputs must have visible labels or appropriate accessible names.
- Icon-only controls must have accessible names.
- Critical information must never be hover-only.
- Reduced-motion mode must remain usable and clear.

## Interaction Proof Gate

- The primary interaction path must update real local UI state: selected, edited, filtered, submitted, confirmed, played, or generated result.
- Visual-only controls fail unless the surface is intentionally static and that constraint is recorded.
- Success, error, disabled, empty, loading, selected, and confirmation states should exist where the requested workflow implies them.

## Micro-Detail Polish Gate

- Inspect the ten detail classes that make a UI feel expensive: typography hierarchy, text baselines, icon optical alignment, radius consistency, shadow softness, border contrast, control padding, image crops/asset edges, state styling, and mobile line breaks.
- Check these details everywhere they appear, not just in the hero: nav, buttons, cards, forms, tables, sidebars, modals, empty states, loading states, error states, selected states, hover/focus/disabled states, and mobile breakpoints.
- Repair any detail that makes the interface feel generated, unfinished, mismatched, or carelessly assembled even when the overall layout is correct.

## AI-Slop Residue Repair Loop

- For every AI-slop or AI-default residue item found, name the concrete repair and apply it when feasible before final: stronger subject fit, better content realism, sharper type, more intentional spacing, less filler chrome, cleaner component system, better asset fit, or a more specific first viewport.
- Do not only identify AI-slop residue. Keep editing until fixable residue is repaired, or record the concrete blocker that makes repair impossible.

## Taste Review Gate

Run this after fidelity and before final response:

- Strongest visual moment: what makes this UI memorable and subject-specific?
- Identity test: what could not be mistaken for any other product, brand, or brief?
- Weakest visual moment: what still looks ordinary, under-designed, or generic?
- AI-slop / AI-default residue: what could still be mistaken for a template, default SaaS page, default dashboard, or generic portfolio?
- Raw/default component smell: does any shadcn/ui or other component-library primitive still look dropped in instead of designed into the system?
- First-use comprehension: can the intended user understand within five seconds what this is, what matters first, what action is available, and what state/result is shown?
- Typography issue: which text group, label, button, row, chart, or mobile line break would a senior designer flag?
- Spatial issue: where are hierarchy, alignment, spacing, rhythm, or edge handling weakest?
- Screenshot-worthy reason: why would this exact viewport be worth showing, not just usable?
- Wow factor: what is the one subject-specific screenshot-worthy moment, and is it earned by the product rather than decoration?
- User delight: would the intended user feel the result is considered, high-end, and useful without sacrificing clarity?
- Final restraint check: which accessory-like effect, badge, glow, wrapper, icon, decoration, or motion cue can be removed or quieted because it adds noise without meaning?
- World-class agency 10-fix review: list the ten highest-impact fixes a top design agency would still demand before signoff. Cover visual thesis, typography, spacing, component polish, material coherence, icons/assets, motion, interaction states, responsive behavior, and AI-slop residue.
- One-more-pass rule: after the first version that feels finished, ask what would be fixed with 20 more minutes, choose the highest-impact feasible repairs, and implement them before final instead of only reporting them.

If the above-fold or first visible viewport does not feel premium for the intended surface, the strongest visual moment is weak, the identity test fails, first-use comprehension fails, interaction proof is missing, AI-slop residue remains fixable, or any raw/default component smell remains, final response is blocked. Keep editing before handoff. Do not hide behind "matches the concept" when the concept or implementation still feels weak.
