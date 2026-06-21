# Concept Contract Reference

Use this compact internal contract before accepting a substantial Image Gen concept or starting implementation. Keep it short enough to act on; it is a decision artifact, not a design essay.

## Contents

- Contract Fields
- Acceptance Scores
- Decision Rules
- Failure Repairs

## Contract Fields

- Task and surface: requested deliverable, primary viewport/screen, required sections/states, platform, and hard user/repo constraints.
- User and product thesis: audience, job-to-be-done, domain artifacts, emotional posture, and the one-sentence product-specific design thesis.
- Chosen style world: primary archetype from `style-archetypes.md`, optional minor accent, and rejected default patterns.
- Scope boundary: primary surface, allowed secondary states/pages, explicitly forbidden extra pages, claims, modules, and generated content.
- First viewport thesis: focal object/workflow/data shape, visible action, supporting proof, next-section or continuation hint, and five-second comprehension target.
- Density posture: quiet utility, balanced product, editorial premium, dense operations, focused editor, mobile transaction, or game playfield.
- Text-space budget: allowed above-fold copy, section idea count, max visible priorities, dominant visual/object role, and quiet-space purpose.
- Signature move: the one memorable subject-tied element and why it proves the product instead of decorating it.
- Copy authority: user/repo copy, readable accepted concept copy, allowed agent-written gap copy, forbidden generated claims, and above-fold copy lock.
- Asset manifest: concept screenshots, generated assets, product/background renders, transparent cutouts, icons, logos/marks, textures, sprites, and any missing asset pass.
- Component system contract: primitive owners, variants, density sizes, state treatment, token roles, icon treatment, and weakest likely component risk.
- State matrix: default, hover, focus, selected/active, disabled, loading, empty, error, success, confirmation, mobile, and any domain-specific state.
- Responsive plan: desktop, current viewport, mobile collapse, overflow strategy, fixed-aspect regions, safe areas, and text wrap risks.
- Motion plan: motion library/path, entrance pattern, interaction/state transitions, duration/easing character, reduced-motion behavior, and no layout-shift animation.
- Accessibility and interaction proof: semantic controls, keyboard path, visible focus, labels/aria names, contrast risks, and primary user action proof.
- Implementation feasibility: repo-native stack, component extraction path, known hard parts, allowed fidelity exceptions, and blockers that require regeneration or user decision.

## Acceptance Scores

Use `score-anchors.md` for anchors. Record 1-5 scores for:

| Dimension | Score | Evidence |
| --- | --- | --- |
| Subject fit |  |  |
| First viewport thesis |  |  |
| Copy/content realism |  |  |
| Density/text-space balance |  |  |
| Component craft |  |  |
| Typography |  |  |
| Spatial composition |  |  |
| Asset fit |  |  |
| Interaction realism |  |  |
| Implementation feasibility |  |  |

Critical dimensions must be at least 4/5: subject fit, first viewport thesis, copy/content realism, density/text-space balance, component craft, interaction realism when the product is interactive, and implementation feasibility.

## Decision Rules

- Accept when all critical dimensions are 4/5 or higher, the signature move is subject-tied, the scope is controlled, and the implementation path is clean.
- Regenerate when the first viewport is generic, crowded, hollow, visually derivative, unreadable, or missing a product-specific thesis.
- Regenerate or simplify when the concept requires static screenshot UI, fragile hardcoded layout, parallel component families, inaccessible interactions, or impossible asset fidelity.
- Ask the user when two viable concepts imply materially different product positioning, IA, brand tone, or page/screen scope.
- Record intentional deviations before coding. Do not discover a mismatch in the browser and pretend it was part of the accepted contract.

## Failure Repairs

- Generic: change focal object, data shape, material, workflow preview, or copy thesis before changing colors.
- Crowded: remove priorities, group content, shorten copy, increase hierarchy, or split sections/states.
- Hollow: add product-specific artifact, richer component craft, meaningful state, or stronger typography rather than filler cards.
- Weak component system: name primitive owners and variants, reduce component families, or regenerate a simpler concept.
- Weak text-space ratio: define one dominant visual/object, one copy unit, one action cluster, and one quiet-space role per viewport.
