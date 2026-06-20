---
name: frontend-design-custom-delta
description: Custom frontend-design delta preserving only local rules worth reusing later: repo-stack-first implementation, a compact art-direction/design-system contract, restrained no-hover-zoom motion, accessibility/engineering gates, and a small QA rubric.
---

# Frontend Design Custom Delta

This is not the final canonical skill. It is a trimmed custom source file that keeps only the useful local rules not worth losing while comparing against the Anthropic and OpenAI frontend sources.

## Scope

- Integrate with the repo's existing stack, components, tokens, routing, and conventions first.
- If the user names a stack or the repo already establishes one, use that stack.
- Do not introduce a new framework, component library, animation library, or styling system unless explicitly requested or already present.
- If no repo context exists, treat the stack as a separate decision and state the assumption briefly.

## Art Direction Contract

Before substantial UI implementation, define a compact contract and implement against it:

- Concept: one sentence describing the product-specific visual idea.
- Typography: display, body, and utility roles, or the repo tokens that own them.
- Color tokens: background, foreground, muted, surface, accent, border, and semantic colors only when needed.
- Composition: one signature spatial move that matches the product and content.
- Motion: one purposeful hero/state moment and one interaction pattern.
- Signature detail: exactly one memorable detail, not scattered decoration.
- Accessibility stance: focus style, contrast target, and reduced-motion policy.

## Design System Baseline

If the repo already has tokens, use them. Otherwise introduce the smallest useful baseline:

- Color tokens as CSS variables or the repo's native token system.
- A consistent spacing scale.
- A readable type scale with responsive constraints where needed.
- A small radius and shadow/elevation set.
- No one-off styling values unless a single exception is clearly justified.

## Motion Discipline

- Never make elements larger on hover or focus.
- Do not use hover/focus `scale()` or equivalent grow effects.
- Do not animate width, height, padding, border width, or properties that cause layout shift.
- Prefer color, opacity, underline, outline, inset shadow, gradient position, or tiny transform/opacity changes that preserve layout.
- Prefer transform and opacity for movement.
- Keep microinteractions short and purposeful.
- Respect `prefers-reduced-motion: reduce` by removing nonessential movement while preserving state clarity.

## Accessibility Gates

Verify before treating UI work as done:

- Keyboard navigation reaches every interactive control.
- Focus rings are visible against the actual background.
- Buttons are buttons, links are links, and inputs have visible labels or appropriate `aria-label`s.
- Critical information is never hover-only.
- Reduced-motion mode remains usable and clear.

## Engineering Gates

- Avoid dependency sprawl. Add dependencies only when already present or clearly justified by the task.
- Responsive behavior must be designed, not patched after the fact.
- Keep component boundaries clean and names intention-revealing.
- Map styling to tokens and scales instead of copying one-off values.
- Ship real runnable code only: no pseudo-code, placeholders, dead stubs, or fake interactions.

## QA Rubric

Use this as a compact self-check after implementation:

- Concept clarity and cohesion.
- Typography quality: scale, rhythm, hierarchy.
- Color discipline: tokens, contrast, restraint.
- Composition distinctiveness: the signature spatial move is real.
- Motion quality: purposeful, smooth, reduced-motion respected.
- Accessibility and usability.
- Integration with the existing stack and maintainability.
