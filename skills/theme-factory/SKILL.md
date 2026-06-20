---
name: theme-factory
description: Apply or create coherent visual themes for artifacts such as slide decks, documents, reports, static designs, and HTML pages. Use when a user asks to style an artifact, choose a color/font direction, apply one of the bundled themes, or generate a custom theme with consistent color roles, typography roles, and usage rules.
license: Complete terms in LICENSE.txt
---


# Theme Factory Skill

This skill provides a curated collection of professional font and color themes, each with selected palettes and font pairings. Treat each theme as a design system seed, not as a shallow recolor: map colors to roles, define typographic hierarchy, preserve contrast, and adapt the theme to the artifact's content and medium.

## Purpose

Use this skill to apply consistent, professional styling to presentation slide decks, documents, reports, static art, web pages, and other visual artifacts. Each theme includes:
- A cohesive color palette with hex codes
- Complementary font pairings for headers and body text
- A distinct visual identity suitable for different contexts and audiences

## Usage Instructions

To apply styling to a slide deck or other artifact:

1. **Use the user's selection if provided**: If the user already named a theme or style direction, do not ask again.
2. **Show the theme showcase when selection matters**: Display `theme-showcase.pdf` if the user wants to choose visually. Do not modify it.
3. **Recommend when asked**: If the user asks you to decide, choose the strongest theme for the artifact's audience, content density, medium, and tone, then state the reason briefly.
4. **Apply the theme as a system**: Once chosen, apply colors and fonts through consistent roles across the artifact.

## Themes Available

The following 10 themes are available, each showcased in `theme-showcase.pdf`:

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
2. Map colors to roles before editing: background, surface, primary text, muted text, accent, highlight, border/divider, positive/warning/critical if needed
3. Define typography roles: display/title, section heading, body, caption/label, numbers/data
4. Apply spacing, borders, shadows, chart colors, table styles, and emphasis treatments consistently
5. Ensure proper contrast, readable hierarchy, and artifact-specific density
6. Maintain the theme's visual identity across every page/slide/section without making everything the same color
7. Render or inspect the final artifact and fix any low-contrast text, accidental palette clashes, crowded layouts, or inconsistent typography

## Create Your Own Theme

To handle cases where none of the existing themes fit, create a custom theme. Generate:

- Theme name and one-sentence art direction.
- 6-10 color roles with hex codes and intended use.
- Typography roles with font choices and weight/scale guidance.
- Component or artifact rules for backgrounds, cards/sections, charts, tables, callouts, images, and emphasis.
- Contrast and accessibility notes for any risky color pairings.
- A short "do not" list for combinations that would weaken the theme.

After generating the theme, show it for review if the user asked to choose; otherwise apply it directly when the user asked you to decide. Then render or inspect the artifact and repair visible quality issues before final delivery.

## Quality Bar

- Do not merely swap colors; build a coherent hierarchy.
- Avoid one-note palettes where every element uses the same hue family unless the brief explicitly calls for that restraint.
- Keep data displays readable: chart colors must be distinguishable, legends must match marks, and labels must remain legible.
- For documents and slides, theme application must improve clarity and polish without hiding content.
- For web or HTML artifacts, translate theme roles into design tokens or CSS variables rather than scattered one-off styles.
