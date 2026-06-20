# Mobile And Transaction Flow Reference

Use this reference for mobile-first apps, booking, checkout, signup, onboarding, purchase, restaurant, scheduling, payments, settings, and form-heavy flows.

## Direction

- Define the transaction path before visual design: start, choose, configure, review, submit, confirm, recover.
- Keep touch ergonomics and trust above visual spectacle.
- Style intensity usually sits at 4-7/10 for utility flows and 7-9/10 for premium consumer flows when brand trust remains high.
- Use one signature detail: tactile selector, calendar rhythm, ticket/card metaphor, product preview, progress rail, map/time block, receipt/confirmation object, or branded empty state.

## Required States

- Default, focused, invalid, loading, disabled, success, failure, empty, back/cancel, confirmation, and recovery.
- Include long labels, narrow devices, keyboard-open implications, and safe-area behavior where relevant.
- For booking/scheduling, include unavailable slots, selected slot, date navigation, timezone if relevant, and confirmation.
- For checkout/payment, include cart/review, totals, errors, trust/security signal, and success receipt.
- For onboarding/signup, include progress, validation, skip/back, success, and post-submit next action.

## Content And Copy

- Labels must be user-side and concrete.
- Error text says what happened and how to fix it.
- Empty states invite the next action.
- Confirmation states summarize the user's committed choice, not generic "success".
- Avoid fake trust badges, fake reviews, fake scarcity, and unverifiable guarantees.

## Implementation Gates

- Minimum touch target is practical and consistent.
- No horizontal overflow unless intentionally used for a carousel or table strategy.
- Primary action remains reachable and clear.
- Form state is real local state, not inert styling.
- Mobile typography is not just desktop scaled down; line breaks and hierarchy are designed.

## Visual QA

- Test at a narrow mobile viewport and at current browser width.
- Verify keyboard/focus behavior where the environment allows it.
- Check one error path and one success path.
- Check that sticky footers, nav, modals, and sheets do not cover fields or CTAs.
- Check final confirmation state as carefully as the first screen.
