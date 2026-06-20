---
name: theme-factory
description: Apply or create premium visual themes for artifacts such as slide decks, documents, reports, static designs, and HTML pages. Use when a user asks to style an artifact, choose a color/font direction, elevate an existing artifact visually, apply one of the bundled themes, or generate a custom theme with consistent color roles, typography roles, signature details, contrast rules, and usage constraints.
---


# Theme Factory Skill

This skill provides a curated collection of premium font and color themes, each with selected palettes, font pairings, role maps, and usage constraints. Treat each theme as a design system seed, not as a shallow recolor: map colors to roles, define typographic hierarchy, preserve contrast, add one signature detail, and adapt the theme to the artifact's content and medium.

This skill is agent-agnostic: use the current harness's native file, render, screenshot, or document-inspection tools. In Codex, prefer the available render/preview tools for the artifact type; in other harnesses, use their closest equivalent. Portability must never reduce the theme quality bar.

## Purpose

Use this skill to apply consistent, professional styling to presentation slide decks, documents, reports, static art, web pages, and other visual artifacts. Each theme includes:
- A cohesive color palette with hex codes
- Complementary font pairings for headers and body text
- A distinct visual identity suitable for different contexts and audiences
- Premium execution rules that prevent generic template styling

## Usage Instructions

To apply styling to a slide deck or other artifact:

1. **Use the user's selection if provided**: If the user already named a theme or style direction, do not ask again.
2. **Show the theme showcase when selection matters**: Display `theme-showcase.pdf` if the user wants to choose visually. Do not modify it. Treat it as a quick palette/font preview only; the theme files are the source of truth for premium execution, role mapping, constraints, and quality bar.
3. **Recommend when asked**: If the user asks you to decide, choose the strongest theme for the artifact's audience, content density, medium, and tone, then state the reason briefly.
4. **Apply the theme as a system**: Once chosen, apply colors and fonts through consistent roles across the artifact.

## Themes Available

The following 10 themes are available. `theme-showcase.pdf` previews their basic palette and font direction; the `.md` theme files contain the higher-fidelity premium execution rules:

1. **Ocean Depths** - Professional and calming maritime theme
2. **Sunset Boulevard** - Warm and vibrant sunset colors
3. **Forest Canopy** - Natural and grounded earth tones
4. **Modern Minimalist** - Clean and contemporary grayscale
5. **Golden Hour** - Rich and warm autumnal palette
6. **Arctic Frost** - Cool and crisp winter-inspired theme
7. **Desert Rose** - Soft and sophisticated dusty tones
8. **Tech Innovation** - Bold and modern tech aesthetic
9. **Botanical Garden** - Fresh and organic garden colors
10. **Midnight Galaxy** - Dramatic and cosmic deep tones

## Theme Details

Each theme is defined in the `themes/` directory with complete specifications including:
- Cohesive color palette with hex codes
- Complementary font pairings for headers and body text
- Distinct visual identity suitable for different contexts and audiences

## Application Process

After a preferred theme is selected:
1. Read the corresponding theme file from the `themes/` directory
2. Create a premium theme contract before editing: color role map, typography role map, density choice, chart/table treatment, signature detail, depth/shadow rule, and one thing this theme must never do
3. Map colors to roles before editing: background, surface, elevated surface, primary text, muted text, accent, rare accent, highlight, border/divider, positive/warning/critical if needed
4. Define typography roles: display/title, section heading, body, caption/label, numbers/data
5. Apply spacing, borders, shadows, chart colors, table styles, image treatments, and emphasis treatments consistently
6. Ensure proper contrast, readable hierarchy, and artifact-specific density
7. Maintain the theme's visual identity across every page/slide/section without making everything the same color
8. Render or inspect the final artifact and fix any low-contrast text, accidental palette clashes, crowded layouts, inconsistent typography, weak hierarchy, or default-template residue

## Create Your Own Theme

To handle cases where none of the existing themes fit, create a custom premium theme. Generate:

- Theme name and one-sentence art direction.
- 8-14 color roles with hex codes and intended use: ink, paper, surface, elevated surface, muted text, primary accent, secondary accent, rare accent, border, chart series, and semantic colors if needed.
- Typography roles with font choices and weight/scale guidance.
- Component or artifact rules for backgrounds, cards/sections, charts, tables, callouts, images, emphasis, spacing, shadows, and dividers.
- Contrast and accessibility notes for any risky color pairings.
- A signature detail that makes the theme recognizable without becoming decoration.
- A short "do not" list for combinations that would weaken the theme.

After generating the theme, show it for review if the user asked to choose; otherwise apply it directly when the user asked you to decide. Then render or inspect the artifact and repair visible quality issues before final delivery.

## Quality Bar

- Do not merely swap colors; build a coherent hierarchy.
- Avoid one-note palettes where every element uses the same hue family unless the brief explicitly calls for that restraint.
- Keep data displays readable: chart colors must be distinguishable, legends must match marks, and labels must remain legible.
- For documents and slides, theme application must improve clarity and polish without hiding content.
- For web or HTML artifacts, translate theme roles into design tokens or CSS variables rather than scattered one-off styles.
- If a bundled theme is close but not right, adapt it with a limited, justified adjustment instead of forcing bad contrast or wrong mood.
- Final polish check: the artifact should look intentionally designed at first glance, with consistent spacing, type scale, color roles, and no accidental default styling.
- Reject flat template output. Repair any slide/document/page that looks like a default office theme, random palette swap, generic Canva preset, or unstyled web component.
- Use one premium signature move per artifact: a disciplined cover/title treatment, editorial divider system, chart accent logic, image crop rule, sectional band, monogram-like marker, or material texture.
- Run a final premium pass: strengthen the first impression, remove weak accents, tighten optical alignment, normalize type scale, verify contrast, and make the artifact feel brand-grade rather than merely formatted.
