# Games And Interactive Scenes Reference

Use this reference for browser games, playful interactive scenes, toy apps, simulations, and highly animated product experiences.

## Direction

- Define the core loop before visuals: move, collect, avoid, build, match, aim, drag, explore, race, solve, or survive.
- Use a proven engine or library for established rules, physics, parsing, or AI behavior unless the user asks for from-scratch logic.
- Art direction must serve readability: player, hazards, goals, rewards, terrain, HUD, and background layers are visually distinct.
- Style intensity can be high, but gameplay clarity outranks decoration.
- Use custom SVG/canvas/Three.js/pixel art/code-native art only when it is the right medium; use Image Gen for production raster assets when the skill requires visual game art.

## Asset Pass

- Generate or create the play surface concept first.
- Then create production assets as needed: character states, sprite sheet, tiles/platforms, collectibles, hazards, goal/checkpoint objects, props, HUD accents, and parallax/background layers.
- Keep collision geometry code-native and tuned to visible assets.
- Request transparent backgrounds or clean cutouts for layered sprites and props.
- Do not crop full concept art into assets unless it is only used as a background and still looks intentional.

## Interaction And State

- Define controls: keyboard, pointer, touch, gamepad if relevant.
- Define states: start, playing, paused, win, fail, restart, score/progress, damage/hazard, and tutorial hint.
- For physics or movement, verify feel: acceleration, jump/drag timing, collision forgiveness, hitbox fairness, and restart speed.
- For responsive play, define whether mobile is full play, simplified play, or a rotated/fullscreen recommendation.

## Visual QA

- Verify canvas or 3D scene is nonblank at desktop and mobile sizes.
- Check that player, hazards, goal, and score are visible without reading instructions.
- Check asset scale, alignment, transparency edges, and parallax/background framing.
- Check motion smoothness and reduced-motion or non-motion fallback where appropriate.
- Do not ship code-drawn placeholder shapes when accepted art direction called for production assets.

## Hard Fails

- Nice hero page instead of playable game.
- Blank or unframed canvas.
- Assets load but do not align with collision.
- Controls not discoverable.
- HUD obscures gameplay.
