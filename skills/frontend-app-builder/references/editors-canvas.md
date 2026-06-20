# Editors And Canvas Tools Reference

Use this reference for design tools, code editors, media editors, document/canvas products, builders, node editors, diagramming tools, whiteboards, and creation surfaces.

## Direction

- Keep the work product primary. Chrome supports creation; it must not visually overpower the canvas/document/media.
- Define the creation model: draw, edit, arrange, inspect, configure, generate, annotate, preview, export, or publish.
- Identify the default object on the canvas and its selected state before Image Gen.
- Choose one signature product mechanic: layer rail, property inspector, command palette, timeline, node graph, mini-map, preview mode, or generation result stack.
- Style intensity usually sits at 5-8/10. Chrome can be quiet while the canvas/product output carries more visual character.

## Required UI Anatomy

- App shell: top bar, primary tools, secondary tools, canvas/document/media area, inspector/sidebar, status bar, and output/export controls when relevant.
- Selection model: selected object, handles, hover outline, active tool, disabled tool, and inspector fields.
- Canvas behavior: default zoom, pan affordance, scroll behavior, safe area, rulers/grid/guides if useful, and empty canvas state.
- Persistence: avoid local saved state hiding seed fixes during QA. Reset or expose seed/default state when verification needs it.

## Concept Brief Additions

- Request readable detail concepts for chrome, inspector, selected object, toolbar, and canvas/document state when a full-screen concept makes them too small.
- Ask for the canvas result and UI chrome as one coherent system, not a pretty output pasted into generic app chrome.
- Include generated asset needs for preview content, document thumbnails, media frames, or output examples.
- Define motion as tool feedback: selection transition, panel reveal, scrub/playhead, generation progress, drag feedback, or preview swap.

## Implementation Gates

- Build reusable chrome primitives: toolbar button, tool group, sidebar row, inspector field, layer row, command item, status token, canvas frame.
- Preserve density and scale. Canvas/document text and chrome text have separate type roles.
- Avoid hover scale. Use outline, color, opacity, cursor, handle visibility, or subtle transform that does not shift layout.
- Verify keyboard/focus states for editor controls when practical.
- Verify canvas/editor at desktop and mobile widths; if mobile is not a full editor, design a credible viewing/limited-editing mode.

## Hard Fails

- Canvas replaced by blank placeholder.
- Generic sidebar labels with no relation to the product.
- Inspector fields that do nothing or contradict selected object.
- Chrome so large that the created work feels secondary.
- Unclear zoom/pan/default state.
