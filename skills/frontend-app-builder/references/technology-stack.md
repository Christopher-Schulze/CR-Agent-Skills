# Technology Stack Reference

Use this reference before choosing frameworks, installing packages, changing frontend tooling, or claiming current Tailwind, shadcn/ui, icon, animation, React, Vite, Next.js, or styling syntax.

## Technology Currency Gate

- Read the repo first: package manager, lockfile, package versions, framework, bundler, Tailwind config, component registry, existing UI primitives, icon set, animation library, and build scripts.
- If a package, CLI, API, or syntax may have changed, verify against primary sources or the repo's installed package docs before using it.
- Use latest stable only when it is compatible with the repo, package manager, framework, and user constraints.
- Claim "latest" only when it was verified during the task or comes from the checked local package state.
- Use the existing framework, component library, styling system, icon set, animation library, or build tool when the repo already has a suitable equivalent.

## Stack Decision Order

1. User-specified stack wins.
2. Existing repo stack wins.
3. Existing design system and component primitives win.
4. For complex greenfield app UIs, prefer React + Vite unless the task or platform points elsewhere.
5. For React/Tailwind greenfield surfaces with no existing or requested component library, use current stable shadcn/ui as the default component system.
6. For single-file/static deliverables, use the simplest implementation that faithfully delivers the accepted design.

## Tailwind And shadcn/ui

- For Tailwind projects, use the repo's current config and token model first.
- For greenfield Tailwind, verify the current stable Tailwind setup path before installing or writing framework-specific config.
- Keep Tailwind assumptions matched to the checked project structure and installed version.
- For shadcn/ui, inspect `components.json`, existing components, aliases, CSS variables, variants, and registry conventions before adding or composing components.
- When adding shadcn/ui to greenfield React/Tailwind work, verify the current stable shadcn setup path and registry conventions first.
- Compose from the existing or newly added shadcn primitives and variants; extend the single primitive when needed instead of creating a parallel Button, Card, Dialog, Input, Tabs, or wrapper family.
- A shadcn/ui component is only a base primitive. Tokenize and style it into the accepted art direction; raw, unstyled, default-looking components are unfinished.

## Motion Libraries

- In React greenfield, prefer Framer Motion when meaningful animation is part of the design and the dependency is justified.
- In existing repos, use the established motion path: Framer Motion, Motion One, native CSS transitions, View Transitions, or framework-native animation.
- Use a repo-native or already-installed animation system when it can deliver the accepted motion cleanly.
- Verify current APIs before using motion syntax, especially around package names, imports, layout features, and reduced-motion helpers.

## Dependency Discipline

- Add a dependency only when it clearly improves fidelity, interaction quality, maintainability, performance, or delivery speed.
- Prefer existing repo dependencies and browser/platform primitives where they are enough.
- Record the reason for any new dependency in implementation notes or final response when it affects the project.
- Heavy dependencies, new build pipelines, or duplicate UI systems need an explicit request or hard requirement.

## Decision Standard

- User-specified stack and existing repo stack win.
- Existing design system and component primitives win when they can deliver the accepted design.
- React + Vite is the complex greenfield app default when there is no user, repo, or platform constraint pointing elsewhere.
- shadcn/ui is the React/Tailwind greenfield component default when no better user/repo component system wins, and it must remain one unified component system.
- Latest stable is the target only after compatibility and current package/API verification.
- Framer Motion is preferred for suitable React greenfield motion when it is meaningful, compatible, and justified.
- Quality is verified through artifacts, screenshots, taste review, and repair loops.
