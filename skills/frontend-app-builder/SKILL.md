---
name: frontend-app-builder
description: Use for new frontend applications, dashboards, games, creative websites, hero sections, and visually driven UI from scratch, or when the user explicitly asks for a redesign/restyle/modernization. Builds from distinctive, subject-grounded, extremely high-taste image-generated concept design with repo-native implementation, clean component architecture, faithful browser-tested execution, and aggressive anti-AI-slop visual QA.
---

# Frontend App Builder

Use this skill to create polished frontend apps, dashboards, games, creative websites, hero sections, redesigns, and other visually driven UI. Act first as a senior front-end designer, then as an engineer implementing an approved design spec.

## Core Standard

The two priorities of this skill outrank everything else:

1. Create enough high-finish Image Gen design first: clean, airy, precise, distinctive, subject-grounded, spatially excellent, intensity-matched, product-appropriate, complete, readable, section-specific when needed, and not repetitive by default.
2. Do not stop until the accepted design and browser implementation match 10/10. Keep fixing visual, interaction, responsive, asset, and typography mismatches until `view_image` comparison would pass agency sign-off.

## Taste And Architecture Contract

Treat every substantial UI as high-end product/design work, not a styled scaffold. The goal is a premium-but-restrained, unusually polished, visually inevitable, sophisticated interface that could not be mistaken for anyone else's while still feeling inevitable for the product, audience, and workflow.

- The result must feel beyond normal AI-generated UI: specific, composed, polished, structurally clean, and hard to mistake for a template or default component assembly.
- Start from the subject: identify the product, audience, job-to-be-done, content reality, emotional tone, and domain-specific visual material before choosing palette, type, layout, motion, or assets.
- Treat the hero or first viewport as a thesis. Open with the most characteristic thing in the product's world: an object, workflow, material, data shape, environment, live interaction, image, or claim that could not fit a generic app.
- Commit to one clear design thesis and one justified aesthetic risk: the single signature element this interface will be remembered by. Spend boldness in one place and keep everything around it disciplined.
- Make the composition feel editorially composed where appropriate: deliberate rhythm, scale, focal hierarchy, negative space, and section sequencing instead of assembled blocks.
- Keep the visual world materially coherent: backgrounds, surfaces, borders, shadows, media, icons, generated assets, and interaction states must feel like one designed system.
- Treat AI defaults as defaults rather than choices: repeated card stacks, bento grids without information logic, hero eyebrow/kicker/badge filler, fake metrics, gradient blobs, decorative icon rows, beige/cream editorial default, dark neon SaaS default, broadsheet/hairline newspaper default, and dashboard chrome that does not serve the workflow.
- Typography carries product personality. Choose display, body, and UI/control text roles deliberately. Type scale, line height, weight, spacing, and wrapping must look designed on every viewport.
- Structure is information. Numbering, dividers, labels, rails, bands, and hierarchy must encode real content or workflow meaning, not decoration.
- Copy is part of the interface. Write from the user's side of the screen: use specific plain language, stable action vocabulary across controls and feedback, useful empty states that invite action, concrete error recovery, and labels that users recognize.
- Repeated UI must be one clean system: shared tokens, shared component families, explicit variants, and stable layout primitives. When no user or repo component library wins, use shadcn/ui as the React/Tailwind component default after verifying the current stable setup. Do not ship raw, unstyled, default-looking component drops, parallel buttons, one-off cards, copied CSS, override chains, or conflicting local styles.
- When the repo already has a stack, components, tokens, routing, animation approach, or design system, use it. Do not introduce a new framework, styling system, component library, animation library, or icon system unless the task requires it and the reason is explicit.
- When there is no existing stack and the user has not specified one, prefer React + Vite for complex app UIs. For React greenfield, prefer the current stable Tailwind CSS setup, shadcn/ui, lucide icons, and Framer Motion when they fit the task; verify current package/version details before installing or claiming "latest".
- For Next.js, Svelte, Vue, plain HTML, native, or other established repos, adapt fully to the existing project instead of forcing React defaults.
- Motion must feel buttery and useful. Prefer Framer Motion in React projects when animation is meaningful and the dependency is already present or justified. Use equivalent native/project motion elsewhere. Never use hover/focus scale or grow effects; avoid animating layout-shifting properties. Respect `prefers-reduced-motion`.
- Performance and maintainability are part of taste: avoid expensive decorative animation, unnecessary re-rendering, huge assets without purpose, fragile hardcoded dimensions, and visual hacks that will collapse under real content.

## Hard Rules

1. Use Image Gen for the visual concept unless the user explicitly opts out or the task is a small UI fix inside an existing design system.
2. Design the complete requested surface before coding. For a full page, app, dashboard, game, or product interface, a header or hero concept is not enough. For multi-section websites and long landing pages, prefer coordinated section-by-section concepts, plus an optional overview for rhythm, over one tall image that loses detail. For apps, dashboards, games, or compact product surfaces, generate the full primary screen plus any needed state, responsive, or asset concepts first.
3. Inside Codex, default multi-section website concepting to one fresh, large, readable Image Gen screenshot per major section. If the request has 1-10 sections, expect roughly 1-10 primary section images. Generate additional section/detail screenshots whenever text, buttons, card anatomy, typography, spacing, or colors are too small to extract. Do not crop or zoom an old full-page image as the main reference; regenerate a fresh standalone section or detail image that preserves the same design system.
4. In Plan mode, generate the design first, then use `request_user_input` to get design approval before planning implementation details.
5. Once accepted, the concept is a production design spec. No creative liberties during implementation: do not reinterpret layout, visible copy, hierarchy, container model, styling, imagery, density, or sections unless the user approves it or a concrete blocker requires it. General design heuristics never override the accepted concept.
6. The completion bar is agency-signoff faithful implementation: 10/10 fidelity to the accepted spec plus production-quality code. If the browser-rendered UI would receive design-review comments, keep fixing it.
7. Before coding, build a small design system from the accepted image: tokens, typography, component families, variants, spacing, icon treatment, and container rules. Include both content typography and UI chrome typography for tools, editors, and dashboards. Implement from that system so repeated elements stay consistent; raw component-library defaults are not a finished design system.
8. For new complex app UIs such as dashboards, admin tools, editors, data-heavy tools, and multi-panel product surfaces, default to React + Vite unless the user specifies another framework, the existing repo already dictates one, or the task is explicitly a single-file/static deliverable. For React greenfield, prefer current stable Tailwind CSS, shadcn/ui, lucide icons, and Framer Motion when they fit the task; first verify current package/version details and avoid adding dependencies when an existing repo already has a suitable equivalent.
9. Default to no hero eyebrow, kicker, pretitle, badge, or pill labels above the main heading. Include one only when the user explicitly requested it or the accepted/reference design already contains it.
10. Verify in the Browser plugin / built-in browser first. Use Playwright Chromium only when Browser/IAB is unavailable or unreliable, and state the fallback reason.
11. For concept-led work, final handoff is blocked until you use `view_image` on both the accepted concept and the latest browser screenshot. This cannot be skipped or replaced with browser inspection alone. If the user opted out of Image Gen or the task is a small fix inside an existing design system, verify against the current UI, user screenshot, or existing reference instead and state why no accepted concept exists. Judge the comparison directly: is this agency-signoff faithfully implemented, and would a great, highly skilled design agency sign off on this exact implementation? If not, keep fixing.
12. Remove temporary QA artifacts before handoff unless the user or task explicitly asks to keep them.

## Coordinate With Other Installed Skills

This skill owns visual concepting and faithful frontend implementation. Use other installed skills when the app needs capabilities outside frontend design. Provider setup should not block Image Gen concepting, static UI work, or design review that does not exercise provider-backed behavior, but implementation and verification of provider-backed behavior should coordinate through the installed skill for that capability. Avoid placeholder setup instructions when another installed skill covers that setup.

For AI/model-generated output, use `openai-developers:openai-platform-api-key` when available unless the user names another provider or explicitly says not to use OpenAI. When that skill is available, always use its credential flow instead of fake keys, placeholder env vars, or manual API-key setup instructions.

## Image Gen Workflow

Read and follow the installed @imagegen skill. For website-specific briefing guidance, use `references/imagegen-website-concepts.md`.

Load the most relevant supplemental reference before substantial concepting:

- `references/landing-pages.md` for landing pages, company/product pages, launch pages, and brand-led marketing surfaces.
- `references/dashboards-tools.md` for dashboards, admin tools, CRMs, internal tools, analytics, operations, planning, and data-heavy product surfaces.
- `references/editors-canvas.md` for editors, builders, media tools, canvas/document tools, code tools, and creation surfaces.
- `references/mobile-flows.md` for mobile-first apps, booking, checkout, onboarding, signup, purchase, scheduling, and form-heavy flows.
- `references/games.md` for browser games, playable scenes, toy apps, simulations, and highly animated interactive surfaces.
- `references/technology-stack.md` before choosing frameworks, installing packages, changing frontend tooling, or relying on current Tailwind/shadcn/ui/motion syntax.
- `references/quality-gates.md` before implementation and final verification for substantial UI.

Before calling Image Gen:

- Copy the user's concrete requirements into the brief: product/page purpose, audience, required sections or states, workflow, supplied copy, nav labels, CTA labels, data fields, required media, responsive needs, and implementation constraints.
- Ask for the complete requested surface: full page, app screen, dashboard, game screen, or coordinated section/state set. If the deliverable is more than a hero, say the concept must include downstream sections, states, or responsive continuation. If the section count is known or implied, name each section/state that needs its own concept screenshot.
- Repeat the implementation constraints: code-native app UI text and controls, fully rendered product/background assets with their own text and branding when appropriate, separable assets, reusable component families, intentional container model, no default card grids, no invented hero eyebrows/kickers/badges/pills, and practical HTML/CSS/component implementation.
- Preserve information architecture from user content, screenshots, or existing apps. Do not let Image Gen invent unrelated sections, fake metrics, new product claims, extra dashboards, new navigation, or a different product story.
- For multi-section websites or long landing pages, default to one coordinated concept image per major section. Use an optional overview only for structure and rhythm; never rely on one giant compressed board when it makes text, button details, card structure, spacing, or typography hard to analyze.
- For dense apps, dashboards, editors, product surfaces, and complex sections, generate separate state or detail concepts for the areas that would become unreadable in a single full-screen image: tables, sidebars, inspectors, modals, toolbars, charts, forms, cards, pricing blocks, testimonials, or media modules.
- If any concept screenshot is too small, blurry, cropped, crowded, or ambiguous for implementation, generate a fresh standalone section/state/detail screenshot before coding. Keep the same palette, typography mood, component family, asset treatment, density, and section order. Do not crop, slice, zoom, or reuse a tiny part of an earlier image as the source of truth.
- For games, plan a dedicated Image Gen asset pass in addition to the concept: transparent character/state sprites or sprite sheet, terrain/platform tiles, collectibles, hazards, goal/checkpoint objects, props, and 2-3 parallax/background layers when the environment has depth. HUD text, scoring, controls, physics, and collision remain code-native.

Reject or iterate on concepts that are header-only for a full-surface ask, cluttered, generic, repetitive, under-specified, unreadable, over-decorated, off-spec with hero eyebrows/kickers/badges/pills not explicitly requested or present in the reference, or not practical to implement faithfully.

## Design Quality Bar

The concept should look like a professional product mockup by a senior product designer:

- One clear creative idea or visual point of view.
- One justified aesthetic risk that belongs to this specific product, not a generic visual trick.
- Strong first viewport with clear offer, product signal, and primary action.
- Hero or first viewport opens with the most characteristic thing from the subject's world, not a generic metric block, dashboard chrome, or decorative visual.
- Full-page rhythm: sections, states, transitions, and mobile views feel designed as one system, without repetitive card stacks or repeated section formulas.
- Cohesive section-to-section flow: connect sections with shared spacing, palette, type rhythm, media treatment, and subtle transitions, not by inventing major new UI components.
- Excellent typography: clear hierarchy, scale, weight, line height, label treatment, and control/chrome text that never falls back to browser-default sizing.
- Intentional whitespace and density; no filler cards, hero eyebrow/kicker labels, pills, badges, fake metrics, or icon rows unless explicitly requested or present in the accepted design.
- Simpler by default: use fewer, stronger visual elements instead of filling the page with illustrations, iconography, decorative widgets, or complex UI chrome.
- Coherent visual system: palette, spacing, radius, borders, shadows, gradients, icon style, imagery, and component geometry.
- Icon fidelity matters when icons are present. Match the accepted design's icon metaphor, stroke weight, fill style, corner shape, size, color, alignment, and spacing instead of swapping in generic nearby icons.
- Color fidelity is mandatory. Match the accepted design's actual background, surface, text, border, shadow, and accent colors; if the design uses a white background, use white rather than cream, ivory, beige, warm gray, or any softened off-white substitute.
- Hero media treatment must match the accepted design. If the hero image has no color overlay or tint in the concept, the implementation must not add one. Use edge fades, masks, or background gradients only to blend image edges into the page; do not wash the image with a color overlay.
- High-quality generated assets for logos, brand marks, hero imagery, product renders, background scenes, illustrations, textures, posters, avatars, empty states, and game sprites/tiles/background layers. Product/background assets should be fully rendered with consistent branding and in-image text when that text belongs to the asset.
- Purposeful motion that clarifies hierarchy, reveals state, or makes the product feel tangible.
- Specific, non-generic copy when the user has not provided exact copy.

Default to intensity-matched, tasteful 8.5/10 finish and distinctiveness: exceptional enough to feel designed, restrained enough to build, and appropriate to the product type. Interpret clean polish as precise spacing logic, calm hierarchy, crisp typography, coherent density, disciplined components, and low visual noise where appropriate, not empty, sterile, generic, or under-designed.

## Visual Direction Defaults

Use these defaults when the user has not given stronger art direction. Adapt them to the product type instead of forcing every app into a marketing-site style.

- Baseline: roughly 8.5/10 finish and distinctiveness, low-to-medium density unless the product demands density, generous spacing where it helps comprehension, high implementation clarity, high typography discipline, and image-led moments when the domain benefits from real visuals.
- Before visual direction, scan relevant repo/user context when available: `AGENTS.md`, existing design docs, current UI, screenshots, brand assets, and explicit user preferences. Use only current, UI-relevant preferences; user brief and repo truth still win.
- Before generating concepts, choose a coherent visual direction: one theme paradigm, background character, typography character, hero or primary-screen architecture, section/app rhythm, 2-4 signature component motifs, and 1-2 motion cues. Commit to the combination so the design feels intentional instead of a generic template.
- For under-specified substantial UI, create a compact direction capsule before Image Gen: 4-6 color roles, display/body/control type roles, one layout thesis, one signature element, one motion thesis, and the AI-default patterns to avoid.
- If the task is under-specified, sketch 2-3 genuinely divergent directions first: different layout thesis, material language, typography character, focal object/data shape, and motion mood. Choose the strongest direction before Image Gen; do not merge styles or treat minor color swaps as alternatives.
- When layout risk is high, sketch a tiny internal wireframe or region map before Image Gen or code: first viewport, primary content, action area, secondary proof/workflow, and responsive collapse.
- Ground the direction in the subject's own world: materials, instruments, terminology, artifacts, environments, user rituals, data shapes, and emotional stakes. Do not choose a generic visual language that would also fit five unrelated products.
- Hero or first viewport: keep one obvious focal point, a short readable headline or primary task, restrained supporting copy, a visible primary action, and enough negative space to work on a small laptop. Do not overcrowd the opening view with stats, chips, badges, fake controls, or competing mini-panels.
- Header simplicity: default to a clean brand mark, essential navigation, and one primary action or control. Avoid icon-heavy nav, extra buttons, search bars, status widgets, segmented controls, decorative illustrations, or dense product chrome in the header unless the user explicitly asks for them or the product workflow requires them.
- Visual economy: prefer one or two high-quality image or illustration moments over many small decorative visuals. Use iconography only where it clarifies navigation, controls, or product meaning.
- Container discipline: avoid nested cards, giant rounded wrappers around every section, default bento/card grids, and over-framed dashboards unless the concept or product type truly needs them. Prefer open layouts, bands, rails, lists, tables, canvases, or a single purposeful framing move.
- Section rhythm: long pages should vary density, image-to-text ratio, alignment, scale, whitespace, and visual tempo while keeping one coherent brand system. Do not repeat the same centered block or left-text/right-card formula through the whole page.
- Section continuity: when multiple section concepts need to become one page, use connective tissue from the existing design system: gutters, bands, alignment, repeated typography, recurring media frames, color rhythm, and small transitional spacing shifts. Do not invent major new carousels, accordions, pricing cards, dashboards, forms, nav systems, feature grids, or other component families unless the user requested them or the accepted concepts show them.
- Media framing: generated imagery should usually sit in clear, implementation-friendly frames with stable aspect ratios, consistent crop logic, radius, shadows, and spacing. Avoid random image sizes or collage chaos unless the user explicitly asks for that direction.
- UI restraints: small labels, utility pills, pseudo-system markers, fake metrics, and decorative dashboard jargon are allowed only when they clarify the product. If they are just visual filler, remove them before acceptance.

## Design Direction Schema

Before Image Gen for substantial UI, record this compact schema. Do not show it to the user unless useful for review.

- Thesis: what this interface is visually and functionally proving.
- Audience emotion: trust, speed, calm control, delight, urgency, luxury, craft, technical confidence, or another specific feeling.
- Subject material: domain objects, data shapes, environments, rituals, tools, textures, or artifacts.
- Layout architecture: hero structure, app shell, dashboard anatomy, canvas model, flow sequence, or game playfield.
- Type personality: display, body, label/control, data/table, and mobile roles.
- Component language: primitive families, variants, density, radius, borders, elevation, icon treatment, and media frame logic.
- Material coherence: how surfaces, media, shadows, borders, icons, and generated assets belong to one visual world.
- Signature risk: the single unique element this interface will be remembered by, why it fits the subject, and why it is worth the risk.
- Anti-slop: the AI-default patterns this design must treat as defaults rather than choices.
- Implementation risks: likely fidelity, responsive, asset, state, performance, or maintainability traps.

## Style Intensity Dial

Set intensity deliberately instead of treating every request as maximum spectacle.

- 3/10 utility: quiet, dense, fast, low ornament. Use for operational tools, settings, and internal workflows.
- 5/10 polished product: refined, clear, lightly branded. Use for most SaaS apps and product surfaces.
- 7/10 premium brand: stronger art direction, richer media, memorable details. Use for launches, consumer products, and public pages.
- 8.5/10 high-end memorable: distinctive but buildable, one justified risk, excellent finish. Use when the user wants standout quality or the domain benefits from brand expression.
- 10/10 experimental: editorial, immersive, or unconventional. Use only when explicitly requested or clearly appropriate; preserve usability and implementation realism.

## Surface-Specific Briefing

Before Image Gen, translate the brief into the surface's own design demands instead of using one generic website/app formula.

- Landing/company sites: define offer clarity, brand signal, hero thesis, proof sequence, section rhythm, next-section preview, and what visual material makes the company/product credible.
- Product/SaaS pages: define product mockup role, workflow proof, feature anatomy, pricing/proof density, and whether hero interactivity is useful or fake chrome.
- Dashboards/admin/tools: define density, navigation hierarchy, table/chart fields, selected/detail states, empty/error/loading states, and whether the primary workflow is scan, compare, create, edit, approve, or monitor.
- Editors/canvas/code/media tools: define app chrome density, canvas/document scale, toolbar groups, inspector/layer/state behavior, zoom/pan defaults, and how the work product stays visually primary.
- Games/interactive scenes: define play surface, HUD, reward/hazard language, sprite/tile/background asset pass, collision geometry needs, and responsive control placement.
- Forms/booking/purchase flows: define transaction path, validation, recovery, confirmation, trust signals, and the minimum number of screens/states needed to make the flow real.

## Two-Pass Anti-Slop Design Critique

Before Image Gen or coding for substantial UI, do two design passes:

1. Draft direction options. If the user gave strong art direction, draft one compact direction. If not, draft 2-3 divergent directions with different palette, type roles, layout concept, signature element, aesthetic risk, and AI-defaults to avoid.
2. Select one direction and reject the others. Name why each rejected direction lost: too generic, weak subject fit, poor implementation path, weak motion story, component-system risk, or another concrete weakness. The selected direction must have a sharper subject fit, stronger implementation path, and less AI-default risk than the alternatives.
3. Critique the selected direction against the brief before building: if it could fit several unrelated products by swapping copy, if the signature element is not subject-tied, or if any module only fills space, revise the direction first.

Then critique the accepted concept and browser implementation separately:

- Concept quality: hero thesis, typography personality, structural meaning, copy usefulness, restraint, and one memorable subject-specific move.
- Implementation quality: spacing, alignment, wrapping, icon fidelity, color drift, type-scale drift, weak hierarchy, browser-default controls, and unclear purpose.

Revise the concept or implementation before proceeding when the answer exposes generic design, fake sophistication, or avoidable visual drift. Fidelity to a weak concept is not enough; the concept itself must pass the design critique before it becomes the spec.

## Concept Acceptance Gate

Accept a generated concept only when it passes these gates. If any gate fails, revise the brief or regenerate before coding.

- Product fit: the first viewport has a subject-specific thesis, not a generic hero pattern with swapped copy.
- Distinctiveness: one justified aesthetic risk is visible, useful, and restrained to one main move.
- Screenshot-worthy moment: reject the concept if no subject-specific moment would be worth showing as a finished viewport.
- Identity test: reject the concept if the strongest viewport could be reused for another product by swapping copy.
- Surface fit: the concept solves the actual surface type, including app density, dashboard scan paths, editor chrome, game HUD, form transaction states, or marketing rhythm as applicable.
- State matrix: complex UIs include required states such as default, selected, hover/focus, empty, loading, error, success, disabled, modal/drawer, and mobile-collapsed where relevant.
- Content/data realism: sample entities, labels, metrics, dates, prices, statuses, chart/table fields, and empty/error copy are plausible for the domain and not generic filler.
- Responsive path: desktop, current viewport, and mobile behavior are inferable before coding; dense regions have a collapse or overflow strategy.
- Motion storyboard: the concept implies a small set of purposeful motion moments: entrance/reveal, interaction/state transition, and reduced-motion fallback.
- Code path: the design can become clean reusable components, tokens, and variants without override chains, parallel primitive families, or a monolithic component.
- Concept feasibility: reject or simplify concepts that cannot be implemented as clean reusable components, real assets, and verified responsive states within repo constraints. A beautiful impossible image is not an accepted spec.
- First-use comprehension: within five seconds, the intended user should understand what this is, what matters first, what action is available, and what state/result the UI is showing.

## Concept Review Mode

Use only when the user asks to generate concepts first, review options, or wait for approval.

- Generate and show the concept.
- Iterate until the user approves.
- Do not implement while the user is still reviewing.
- Once approved, treat the concept as the active spec and follow the fidelity workflow below.

## Before Coding

Turn the accepted concept into a design system and implementation inventory before coding:

- Exact visible copy, nav items, CTA labels, section headings, proof points, data labels, and important UI text.
- Chosen direction record: selected design thesis, rejected direction types, why the winner fits the brief better, and the AI-default risks it avoids.
- Surface-specific requirements: what this surface must do well, including scan, compare, create, edit, approve, monitor, transact, play, read, or convert.
- Per-section/state image inventory: source concept screenshot, native aspect, visual priority, readable text, typography relationships, spacing, button/control styling, component/container rules, dominant colors, and any unresolved details that required a fresh extraction screenshot.
- Allowed above-the-fold copy list: every visible hero, nav, eyebrow/kicker/pretitle, badge/pill, CTA, label, and proof string allowed from the accepted concept or user-provided copy.
- First viewport composition, section order, downstream states, responsive continuation, and next-section preview.
- Section continuity plan: how adjacent sections connect using the accepted design system, and which major component families are allowed. Treat unshown major components as out of scope unless the user requested them or a required workflow cannot function without them.
- Brand mark, imagery roles, product mockups, dashboards, tables, charts, maps, media rails, forms, HUDs, or other visual artifacts.
- Hero/media treatment inventory: whether each image has no overlay, a color overlay, a gradient overlay, edge fade, mask, transparent background, or matching background color. Record this explicitly before coding.
- Standalone asset needs: if the concept includes a logo, brand mark, product label, packaging, poster, sign, product render, or branded background object, create matching standalone assets with Image Gen editing before implementation so branding stays coherent.
- Asset manifest for generated visual assets: asset purpose, source concept, target file, crop/aspect, transparent/background need, text/logo fidelity, and where it appears in the UI.
- Game asset needs: if the concept is a game, create matching production art assets with Image Gen before implementation. Include transparent sprite/state assets, tiles/platforms, collectibles, hazards, goal objects, props, and parallax/background layers as needed; use code for collision boxes and game state, not as a substitute for visible art.
- Technology currency: repo stack, package constraints, verified current package/CLI/API details, dependency decisions, current stable Tailwind/shadcn/ui/motion setup where relevant, and why no stale framework/styling/motion assumption is being used.
- Design tokens sampled or approximated from the image: background, surface, text, muted text, border, shadow, accent, semantic colors, radii, elevation, spacing scale, and motion timing.
- Art direction contract: product-specific design thesis, audience, tone, the signature element this interface will be remembered by, typography roles, material coherence, motion role, and anti-slop risks to avoid.
- Component system contract: component-library decision, primitive families, allowed variants, token mapping, shared layout primitives, semantic status/priority variants, and which one-off exceptions are allowed for fidelity. If no existing component system wins in a React/Tailwind surface, shadcn/ui is the default base and must be styled into the accepted art direction.
- Spatial composition contract: focal hierarchy, optical alignment, breathing room, density rhythm, section transitions, mobile line breaks, edge discipline, and next-section preview.
- Color lock: explicitly identify whether the concept background is true white, off-white, cream, gray, dark, or tinted, then implement that exact choice. Do not warm up, cool down, mute, or otherwise "tastefully" reinterpret the palette.
- Typography system: font family/fallback, type scale, weights, line heights, tracking, label treatment, heading/body/caption styles, control text styles, and responsive type behavior.
- Icon inventory: every visible icon, glyph, chevron, logo-like mark, toolbar symbol, status symbol, and empty-state symbol; record meaning, source family, outline vs filled style, stroke width, size, color, container, alignment, spacing, and selected/hover/disabled treatment.
- Component families and variants: buttons, navigation, rows, panels, media frames, product mockups, cards only where present, tables, forms, chips, icons, empty states, responsive variants, hover/focus/selected states.
- State matrix: default, selected, hover/focus, empty, loading, error, success, disabled, modal/drawer, and mobile-collapsed states that must exist for the requested workflow.
- Content/data realism: domain-specific sample records, chart/table fields, dates, prices, statuses, labels, validation copy, empty-state copy, and error recovery copy.
- Responsive plan: desktop, current viewport, tablet if relevant, and mobile layout behavior for navigation, sidebars, tables, charts, media, forms, controls, and first viewport balance. Responsive behavior must be designed before coding, not patched after visual QA exposes collapse.
- Motion storyboard: one entrance/reveal pattern, one interaction/state transition pattern, one optional product-tactility moment, timing/easing direction, and `prefers-reduced-motion` behavior. Every motion cue must map to hierarchy, state, product tactility, or navigation.
- Accessibility contract: keyboard path, visible focus style, semantic controls, labels/aria labels, contrast risk, hover-only risk, and reduced-motion behavior.
- Component architecture plan for complex app UIs: app shell, navigation, major feature regions, named reusable UI primitives, component owners, variants, data/state helpers, chart/table/form modules, asset modules, and responsive layout boundaries. Name the main primitives and feature components with intention-revealing names before coding so the implementation cannot collapse into one giant `App` component, duplicated wrappers, or one-off copied markup.
- Container model: cards, panels, rails, bands, lists, tables, canvases, drawers, sidebars, modals, or full-bleed sections.
- Core workflow and interaction proof: controls that must respond, selected states, filters, tabs, edits, creation flow, success state, playback, game controls, generated-result demo, and which primary path must prove real local state before final.

If the concept omits required downstream sections, states, mobile views, or readable detail for a complex area, generate matching section/state/detail concepts when visual consistency or extraction is uncertain. Otherwise extend in the exact same visual system.

## Implementation

- Build the real usable surface first, not a marketing wrapper around a future app.
- Follow the repo's framework, routing, component, styling, state, accessibility, and asset conventions.
- When creating a new complex app UI without an existing framework constraint, use React + Vite by default. Structure it like a senior front-end engineer would: small focused components, a clear app shell, reusable primitives for repeated controls, feature-specific modules for dashboards/tables/charts/forms, separated sample data and state helpers, and shared tokens/styles. Keep `App` as composition glue instead of a monolithic screen implementation.
- If the repo already uses Next.js, Svelte, Vue, plain HTML, native components, Tailwind, CSS modules, styled systems, shadcn/ui, Radix, Mantine, MUI, Framer Motion, Motion One, or another established stack, integrate with that stack instead of creating a parallel one.
- Avoid dependency sprawl. Add dependencies only when already present, required by the repo/user, or clearly justified by fidelity, interaction quality, maintainability, performance, or delivery speed.
- For Tailwind projects, use the repo's token/config model first. For greenfield Tailwind, use the current stable Tailwind approach after verifying package docs/version details; do not rely on stale assumptions.
- For React/Tailwind surfaces without a user-requested or existing component library, use current stable shadcn/ui as the component base after verifying setup. Compose from shadcn primitives and variants, then style/tokenize them into the accepted design; do not ship raw, unstyled, default-looking primitives.
- For shadcn/ui projects, compose from the existing shadcn components and variants. Extend the single source of truth when needed; do not fork Button, Card, Dialog, Input, Tabs, or other primitives into parallel component families.
- Implement through the design system extracted from the image. Similar elements must use the same component or shared style primitive; differences should be explicit variants, not one-off copied CSS.
- Apply `references/quality-gates.md`: repeated UI needs primitive owners and named variants; more than 2-3 local overrides on repeated controls means the system is wrong and must be repaired.
- Keep styling crisp and maintainable: map visual decisions to tokens, scales, component variants, and reusable layout primitives. Avoid arbitrary values unless a single exception is required for fidelity and documented in the implementation notes.
- During implementation, audit styling conflicts: duplicated selectors/classes, contradictory Tailwind utilities, inherited browser/control typography, specificity fights, and responsive classes that cancel the intended layout.
- Implement the accepted concept exactly. Preserve copy, hierarchy, section order, density, colors, typography, spacing, radii, borders, shadows, asset framing, and interaction model.
- For multi-section pages, implement in slices that match the accepted section concepts. Start with the first viewport, compare its browser screenshot to the section concept, fix visible drift, then continue section by section. Do not defer all visual comparison until the whole page is coded, and do not merge or simplify section-specific design decisions just because a broad overview image is easier to follow.
- Connect sections into one cohesive page without adding unapproved major UI components. Use spacing, background bands, alignment, typography rhythm, repeated motifs, and media framing to bridge gaps. Do not invent new carousels, accordions, pricing blocks, dashboards, forms, tab systems, feature-card grids, or other large components to make the page feel complete unless they appear in the accepted concept, were requested by the user, or are recorded as a concrete functional necessity.
- Do not add new visible above-the-fold copy, hero eyebrows/kickers, explanatory labels, subtitles, or category text after concept acceptance unless it appears in the accepted concept, came from the user, or is recorded as an intentional deviation. If semantic HTML, SEO, or accessibility requires changing an H1 or heading level, change the element semantics first; do not invent compensating visible copy.
- Do not add decorative hero eyebrow labels, pills, badges, gradients, glows, or overlays that were not in the accepted design. Do not substitute a gradient treatment unless it matches the concept's palette, direction, intensity, and placement. If the accepted hero image has no color overlay, do not add a translucent tint, wash, or colored layer over it. If the image needs help blending into a non-matching page background, use a matching asset, transparent cutout, edge fade, mask, or background gradient around the image rather than a color overlay on top of the image. Do not replace white backgrounds with cream/off-white or otherwise shift the accepted color temperature.
- Define typography on controls deliberately. Do not rely on browser defaults or inherited `16px` sizing for buttons, tabs, inputs, toolbars, sidebars, inspector panels, layer rows, status bars, command palettes, or export/share controls.
- Preserve the container model. Do not add cards, bordered panels, floating containers, tiles, or card grids where the spec uses open whitespace, bands, rails, lists, tables, canvases, or full-bleed composition.
- Keep real interactive app UI text, navigation, buttons, forms, tables, controls, and labels code-native. This does not apply to text and branding that belong inside product images, posters, packaging, signs, background scenes, hero photos, or other raster assets. Do not ship a static screenshot as UI.
- Use Image Gen for central non-icon assets. Render product images and background assets completely with the needed text, logos, marks, labels, packaging, signage, and branding. When the asset must layer into the UI, request a transparent background or clean cutout. Quote exact asset text and require verbatim rendering when text matters.
- If the accepted design includes branded product imagery, use Image Gen editing to create standalone versions of the logo/product/packaging/signage assets from the concept or a matching asset pass. Include transparent-background variants when those assets need to layer into the UI. Do not rebuild branded raster assets from generic CSS, mismatched fonts, or approximate labels.
- For games, use Image Gen for visible production art: character/state sprites or sprite sheets, terrain/platform tiles, collectibles, hazards, goals/checkpoints, foreground props, and parallax/background layers. Do not fall back to canvas-drawn shapes because collision, scaling, or animation is simpler. Keep HUD text, score, controls, hit boxes, physics, and game state code-native, and tune collision geometry to the rendered assets. Any code-drawn or vector game art must be listed as an intentional deviation or concrete blocker.
- Do not replace concept assets with rough CSS drawings, generic gradients, placeholder SVGs, or stock-like crops. Images must sit naturally in the composition: background color, lighting, edges, crop, shadow, and transparency should blend with the surrounding design. SVG is fine for faithful icons and directional glyphs.
- Use SVG/icon components for arrows, chevrons, carets, disclosure indicators, pagination arrows, and carousel arrows; do not use plain text glyphs unless the concept intentionally does.
- Implement icons as faithfully as other visual elements. Prefer the repo's existing icon set or lucide only when it matches the accepted design's style; otherwise create a small custom SVG/icon variant that matches the concept. Custom SVG icons must be production-quality vector assets: clear `viewBox`, clean geometry, consistent stroke widths, aligned joins/caps, balanced negative space, optical centering, scalable paths, no jagged or placeholder-looking shapes, and `currentColor` or explicit fills only when they match the design system. Do not replace filled icons with outline icons, rounded icons with sharp icons, thick strokes with thin strokes, or specific metaphors with generic symbols. Keep icon color, optical size, baseline alignment, padding, and interactive states consistent with the extracted icon inventory.
- Make app interfaces experiential: local state, meaningful selected states, working filters/tabs/forms, editable or creatable items, success states, playback controls, game controls, or simulated generated output where appropriate.
- Use interactive UI inside a hero only when it genuinely fits: SaaS/software product previews, product demos, or purposeful interactive animation. Do not force fake interactive chrome into a branded, editorial, product, venue, food, consumer, or background-led hero. Faithful implementation and consistent branding are more important than adding interactivity.
- Add motion only where it supports the design. Respect accessibility and `prefers-reduced-motion`.
- Do not use hover/focus `scale()` or equivalent grow effects. Prefer color, opacity, underline, outline, inset shadow, gradient position, or transform/opacity motion that does not shift layout.
- Do not animate width, height, padding, border width, or other layout-shifting properties for microinteractions. Use transform and opacity for movement whenever practical.
- Keep implementation production-oriented: semantic markup, stable responsive dimensions, no fragile hardcoded hacks, and type/lint/test checks when the repo supports them.
- Ship real runnable UI only: no pseudo-code, placeholders, dead stubs, TODO shells, inert controls, or fake interactions presented as complete product behavior.

## Verification

Run the app and verify the visible product, not just the build.

1. Use Browser/IAB first. Load the app, inspect the first viewport, scroll, and click through the core workflow.
2. Check desktop, current browser viewport, and a mobile-sized viewport.
3. For concept-led work, capture or locate the accepted concept and the latest implementation screenshot. Use `view_image` on both in the same QA pass before final handoff; do not skip this step or substitute a browser glance for it. For no-concept work, use the current UI, user screenshot, or existing design-system reference as the comparison source and record why no accepted concept exists.
4. For concept-led work, capture the implementation at the accepted concept's native dimensions when practical. If not practical, record the blocker and also verify the current browser viewport. For no-concept work, capture the relevant viewport, component state, or interaction state.
5. For redesign/restyle work, capture or inspect the current UI before changing it, preserve the required information architecture, and verify the final result against both the accepted direction and the original functional surface.
6. Write a fidelity ledger before final: mismatch, spec/reference evidence, render evidence, and fix made or reason not fixed. For multi-section or multi-state specs, include evidence from the relevant section/state concept screenshots or active references, not only the overview. Inspect at least five concrete comparison points covering copy, layout, typography, palette/gradients, asset treatment, spacing/container model, responsive behavior, or motion.
7. Compare side by side against the accepted concept or active reference for copy, nav, CTA labels, section order, first-viewport balance, next-section visibility, palette, gradient treatment, font personality, type scale, spacing, borders, radii, container model, asset/background blending, motion, and simulated interactions.
8. Run an above-the-fold copy diff against the allowed copy list. Added, removed, renamed, or reordered visible copy must be fixed or listed as an intentional deviation; unapproved additions fail fidelity.
9. Run a first-use comprehension check: within five seconds, the intended user should understand what this is, what matters first, what action is available, and what state/result the UI is showing.
10. Audit typography everywhere, not just the hero or main canvas. Check headings, body, captions, labels, toolbar controls, sidebar rows, tabs, inputs, inspector fields, status bars, command palettes, export/share buttons, table cells, chart labels, and mobile line breaks. Use computed CSS sizes/weights/line-heights when the screenshot suggests drift.
11. Audit icons wherever they appear: nav, buttons, cards, toolbar controls, sidebars, tables, status indicators, empty states, pagination, carousels, and mobile controls. Check metaphor, stroke/fill style, size, color, alignment, optical weight, spacing, and state changes against the accepted concept.
12. Audit component integrity: repeated controls use shared components or explicit variants, not duplicated markup/style families; local overrides do not contradict the design system.
13. Audit styling conflicts: duplicated selectors/classes, contradictory Tailwind utilities, inherited browser/control typography, specificity fights, and responsive classes that cancel the intended layout.
14. Audit spatial composition: focal hierarchy, optical alignment, breathing room, density rhythm, section transitions, mobile line breaks, edge discipline, and next-section preview.
15. Audit motion system: explicit library/path choice, duration bands, easing character, entrance pattern, state transition pattern, reduced-motion behavior, no layout-shift animation, and performance budget.
16. Audit accessibility: keyboard navigation reaches every interactive control, focus rings are visible on the actual background, buttons/links/inputs use correct semantics, labels or aria-labels are present, critical information is not hover-only, and reduced-motion mode remains clear.
17. For canvas/editor apps, audit app chrome separately from canvas/document text. Default zoom and pan are part of the spec; persisted local state must not hide seed, scale, or typography fixes during verification.
18. Run a final polish pass separate from fidelity: after matching the accepted concept, judge whether the rendered design itself feels finished, sharp, intentional, and product-appropriate. Remove weak filler, soften over-decoration, tighten spacing, fix awkward wraps, strengthen hierarchy, align tiny details that would bother a senior designer, and remove or quiet one accessory-like detail when it adds noise without meaning.
19. Run the `references/quality-gates.md` taste review: strongest visual moment, weakest visual moment, AI-slop / AI-default residue, raw/default component smell, first-use comprehension, typography issue, spatial issue, screenshot-worthy reason, final restraint check, and next three fixes. Final response is blocked if the strongest visual moment is weak, the identity test fails, first-use comprehension fails, or any raw/default component-library primitive still looks dropped in instead of designed.
20. Run a viewport QA harness manually through Browser/IAB or Playwright fallback: desktop, current viewport, mobile, console errors, overflow/clipping, asset loading, and core interaction state.
21. Ask explicitly: is this agency-signoff faithfully implemented, and would a great, highly skilled design agency sign off on this exact implementation of the accepted design? If anything would get a design-review comment, write a concrete repair checklist and keep editing. Do not final-answer with fixable visual issues.
22. Verify generated assets load, are framed correctly, and do not obscure text or controls.
23. Prove the primary interaction path with real local state: selected, edited, filtered, submitted, confirmed, played, or generated result. Visual-only controls fail unless intentionally static.

Functional QA does not count as fidelity QA. Passing build checks, clicking controls, or verifying local state cannot replace the concept/reference-to-screenshot comparison, native-size or relevant-viewport check, and written mismatch ledger.

Hard stops: clipped primary content, accidental wrapping, prototype-looking layout, rough seeded data, placeholder boxes, raw or default-looking component-library primitives, generic stock-like assets, unfinished cards, code-drawn game placeholders replacing concept art, invented visible copy, invented hero eyebrows/kickers/pills/badges, mismatched colors or gradients, white backgrounds changed to cream/off-white, unapproved hero image color overlays or tints, missing or generic substituted icons, mismatched icon style or stroke weight, images that do not blend with the background, stale debug artifacts, unreadable text, type-scale drift, browser-default control typography, unresolved styling conflicts, invisible focus, keyboard-inaccessible controls, hover-only critical information, unlabeled inputs or icon-only controls without accessible names, failed first-use comprehension, unverified primary interaction path, mobile overflow, unprofessional responsive collapse, or any visible drift from the accepted spec.

## Surface Gates

- Landing/company sites: preserve first viewport, hero role, brand/nav/CTA labels, section order, next-section preview, and signature imagery.
- Product/SaaS pages: preserve product mockups, workflow diagrams, feature strips, proof elements, and brand treatment.
- Dashboards/tools: preserve density, sidebars, headers, tables, tabs, timelines, charts, maps, row counts, and selected/detail behavior. Do not turn table-driven concepts into card grids.
- Canvas/editor tools: preserve default zoom/pan, canvas/document text scale, chrome density, toolbars, sidebars, inspector controls, layer rows, status bars, command surfaces, and autosaved/seed-state behavior.
- Timeline/planning tools: preserve grid/time-axis anatomy, row spans, event density, status rails, and command-center fit.
- Clone-like interfaces: preserve the recognizable skeleton before adding polish. Do not add marketing heroes or custom navigation that breaks the product type.
- Games: preserve the art direction with Image Gen assets for sprites, tiles/platforms, collectibles, hazards, goals/checkpoints, props, and background/parallax layers. Verify assets load, scale, animate or swap state correctly, align with collision geometry, and support movement, action/jump/drag behavior, scoring, hazards, and restart.
- Media surfaces: verify real media load, duration, play/pause, seek/progress, and visible frame changes.
- Forms/booking/purchase/restaurant flows: verify the main transaction path and confirmation state.

## Final Response

Final handoff should be concise: summarize what changed, what was verified, any intentional deviations or unresolved blockers, and how to run or view the result. Include concept, screenshot, and verification evidence at a compact level, not the internal fidelity ledger. Do not dump internal gate checklists, detailed mismatch ledgers, design critique notes, comparison-point inventories, or process narration unless the user asks for them. If no material mismatches remain, say so directly; if a blocker remains, name it plainly.
