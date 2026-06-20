# Quality Gates Reference

Use this reference before implementation and during final verification for substantial UI. These gates convert taste into enforceable checks.

## Component Integrity Gate

- Every repeated UI family must have a primitive owner: button, input, tab, row, panel, card, dialog, toolbar item, status token, chart frame, media frame, or canvas control.
- Name the variants before coding: size, density, tone, selected, disabled, loading, destructive, warning, success, priority, and surface context where relevant.
- Repeated controls must use the same primitive or explicit variant, not copied markup with local style drift.
- More than 2-3 local Tailwind/class overrides on repeated controls means the primitive or token model is wrong. Fix the system before adding more overrides.
- When no user or repo component system wins, React/Tailwind surfaces should default to current stable shadcn/ui. Use it as a styled, tokenized component base, not as a raw component dump.
- Raw, unstyled, default-looking components fail this gate. The component system must look intentionally designed for the accepted concept while staying architecturally unified.
- Wrapper components that only add styling are suspicious; prefer a real primitive variant or shared layout primitive.
- One-off styling is allowed only for accepted-concept fidelity and must remain isolated, named, and justified.

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

## Motion System Contract

- Choose the motion implementation explicitly: Framer Motion, repo-native motion, Motion One, CSS transitions, View Transitions, canvas/Three.js loop, or no motion.
- In React greenfield, prefer Framer Motion when animation is meaningful and the dependency is justified; otherwise use existing or simpler motion.
- Define duration bands: microinteraction, entrance/reveal, panel/modal, page/section transition, and game/canvas loop if relevant.
- Define easing character: precise, soft, springy, mechanical, premium, playful, or utilitarian.
- Include one entrance/reveal pattern, one interaction/state transition pattern, and one optional product-tactility moment. Every cue must map to hierarchy, state, product tactility, or navigation.
- Use transform and opacity by default. Do not animate layout-shifting width, height, padding, border width, or flow-dependent properties unless there is a concrete reason and it is verified.
- Respect `prefers-reduced-motion`; the reduced-motion version must still communicate state clearly.
- Keep animation cheap: avoid constant decorative loops, expensive blur/filter animation, large repaints, and animation that competes with reading or task completion.

## Taste Review Gate

Run this after fidelity and before final response:

- Strongest visual moment: what makes this UI memorable and subject-specific?
- Identity test: what could not be mistaken for any other product, brand, or brief?
- Weakest visual moment: what still looks ordinary, under-designed, or generic?
- AI-slop / AI-default residue: what could still be mistaken for a template, default SaaS page, default dashboard, or generic portfolio?
- Raw/default component smell: does any shadcn/ui or other component-library primitive still look dropped in instead of designed into the system?
- Typography issue: which text group, label, button, row, chart, or mobile line break would a senior designer flag?
- Spatial issue: where are hierarchy, alignment, spacing, rhythm, or edge handling weakest?
- Screenshot-worthy reason: why would this exact viewport be worth showing, not just usable?
- Wow factor: what is the one subject-specific screenshot-worthy moment, and is it earned by the product rather than decoration?
- User delight: would the intended user feel the result is considered, high-end, and useful without sacrificing clarity?
- Final restraint check: which accessory-like effect, badge, glow, wrapper, icon, decoration, or motion cue can be removed or quieted because it adds noise without meaning?
- Next three fixes: list the smallest concrete fixes that would most improve perceived quality.

If the strongest visual moment is weak, the identity test fails, or any raw/default component smell remains, final response is blocked. Keep editing before handoff. Do not hide behind "matches the concept" when the concept or implementation still feels weak.
