# Design Decision Examples Reference

Use this reference before substantial concepting when the requested UI must feel unusually polished, distinctive, and non-generic. These examples are decision anchors, not templates. Adapt the logic to the product instead of copying the surface form.

## Decision Standard

- Start from the product's work, object, material, data shape, environment, user ritual, or result. A visual direction that starts from "modern premium UI" is not specific enough.
- Prefer one strong subject-specific move over several decorative effects.
- Every repeated element needs a component reason. Every visual flourish needs a comprehension, state, material, or brand reason.
- When two choices both look good, choose the one that makes the product easier to understand, less interchangeable, and cleaner to implement.

## Bad / Better Pairs

### Generic SaaS Hero

- Bad: centered headline, soft gradient blobs, three fake KPI cards, row of generic logos, and a pill above the H1.
- Better: hero organized around the actual workflow artifact: input, decision, output, or result state. The primary visual proves what the product does without relying on fake metrics.
- Decision rule: if the hero preview could belong to any SaaS after replacing the logo, replace it with product anatomy or a result artifact.

### Feature Grid

- Bad: six icon cards with "Fast", "Secure", "Smart", "Integrated", "Automated", and "Scalable".
- Better: one narrative product sequence showing before state -> user action -> system response -> outcome, with the minimum supporting features embedded where they matter.
- Decision rule: if a feature card does not change the buyer's decision, convert it into workflow evidence or remove it.

### Dashboard Concept

- Bad: decorative KPI tiles, fake line charts, colorful badges, and a table whose rows do not affect the workflow.
- Better: one dominant scan path such as a risk queue, approval table, status spine, incident map, timeline, or inspector-driven compare view.
- Decision rule: dashboard density should come from the user's work, not from filling the screen.

### Editor Or Canvas Tool

- Bad: beautiful output pasted into generic chrome with inert toolbar icons and oversized side panels.
- Better: the work product dominates; selected object, handles, inspector fields, layer rows, zoom, and status feedback all describe one real creation state.
- Decision rule: if the canvas would still look plausible with the sidebars removed, the chrome is probably generic and needs stronger state linkage.

### Mobile Transaction Flow

- Bad: branded splash, generic form fields, vague "Continue" actions, and a success screen that only says "Done".
- Better: a clear transaction path with selected choice, visible constraints, recovery copy, reachable primary action, and a confirmation object summarizing what the user committed to.
- Decision rule: trust comes from clarity, recovery, and confirmation, not from fake badges or decoration.

### Game Or Playable Scene

- Bad: attractive poster-like scene with unclear player, hazards, goals, and controls.
- Better: readable silhouettes, distinct terrain and hazard language, visible score/progress, fast restart, and production art assets aligned to collision geometry.
- Decision rule: gameplay readability beats spectacle. Art direction serves player decisions first.

### Raw Component Library

- Bad: default shadcn/ui cards, outline buttons, inputs, tabs, and badges assembled with local class overrides.
- Better: shadcn or repo primitives become a designed system: named variants, control typography, status semantics, density scale, icon treatment, focus states, and shared layout primitives.
- Decision rule: if a component still looks like it came straight from the registry, it is not finished.

### Decorative Motion

- Bad: hover scale, floating loops, blur pulses, and entrance animations that compete with reading.
- Better: motion reveals hierarchy, confirms state, swaps views, exposes selection, guides the user to a result, or gives a product object tactile behavior.
- Decision rule: if removing an animation does not reduce comprehension, state clarity, or product feel, remove or quiet it.

### Image Gen Text

- Bad: treating tiny generated labels, invented claims, fake metrics, or warped logo text as production copy.
- Better: user/repo/brief copy is the authority; generated text is used only when readable, safe, and accepted. App UI text remains code-native; branded asset text stays inside raster assets only when it belongs to the object.
- Decision rule: unreadable generated text is layout evidence, not copy evidence.

### Page Sprawl

- Bad: building many pages, routes, or sections before the primary surface has a strong hierarchy, premium components, and clear interaction proof.
- Better: one flagship page, screen, or flow state brought to 10/10 first, then additional pages only when requested or required by the workflow.
- Decision rule: if a new page does not improve the requested deliverable or prove the core workflow, spend that effort polishing the primary surface.

### Text-Heavy Section

- Bad: a section with a heading, long paragraph, six bullets, several cards, badges, and a CTA all explaining the same idea.
- Better: one sharp sentence, one product/workflow proof, and one supporting detail; let the visual or interaction carry what text would otherwise repeat.
- Decision rule: if users must read several blocks to understand a section, the section needs stronger hierarchy, less copy, or a better proof object.

### Basic Component

- Bad: default button, card, input, tab, table row, badge, or modal with only color/class tweaks.
- Better: component with deliberate type, padding, geometry, border/elevation, icon alignment, focus, hover, selected, disabled, loading/error states, and responsive behavior.
- Decision rule: if a component would still look plausible in a default shadcn/ui, Tailwind, or browser demo after changing colors, it is unfinished.

### Empty Minimalism

- Bad: lots of whitespace, tiny copy, generic button, and one weak image, producing a page that is "clean" but not designed.
- Better: quiet composition where negative space frames a strong product object, type has personality, components have material detail, and the next action is obvious.
- Decision rule: quiet space is only successful when the remaining elements are more crafted, not less.

## Surface Archetype Choices

- Landing page: choose product artifact, workflow proof, customer environment, material detail, result state, or brand image. Avoid starting from conversion-card layout.
- Product page: choose product anatomy, before/after, workflow progression, or concrete output. Avoid generic benefits and fake dashboards.
- Dashboard/tool: choose queue, table, board, timeline, map, matrix, inspector, log, or command center. Avoid decorative summary cards.
- Editor/canvas: choose selected object, tool state, inspector relationship, layer stack, command palette, timeline, node graph, or preview/export state. Avoid generic chrome.
- Mobile flow: choose selector, progress rail, calendar rhythm, review object, receipt, map/time block, product preview, or confirmation state. Avoid purely branded screens.
- Game: choose loop, silhouette language, terrain grammar, reward/hazard contrast, HUD priority, and asset pipeline. Avoid poster-first scenes.

## Sophistication Reality Checks

- Could this viewport be reused for another product by changing copy? If yes, it is not distinctive.
- What is the one thing this interface visually proves? If the answer is "it looks premium", the concept is weak.
- What would a senior designer remove? Remove or quiet the lowest-meaning accessory before final.
- What component would become messy in code? Redesign the component system before coding instead of hiding complexity in one-off classes.
- What is the hardest mobile line break, table collapse, or control state? Resolve it before implementation starts.
- Which visible detail would expose this as AI-generated: filler copy, fake data, generic icon, raw button, vague hero, gradient blob, meaningless card, or inconsistent spacing? Fix that first.
