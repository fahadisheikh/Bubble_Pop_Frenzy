# Bubble Pop Frenzy

A fast-paced, kid-friendly bubble-popping game with three distinct game modes. Built with vanilla JavaScript and HTML5 Canvas, bundled with Vite.

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build       # Production build → dist/
npm run preview     # Preview the production build locally
```

## Game Modes

### Classic Mode
Pop as many bubbles as you can in 60 seconds. Avoid dark decoy bubbles that cost you points.

### Survival Mode
How long can you last? Miss too many bubbles and the game ends. Difficulty escalates over time — the game adapts to your skill level.

### Colour Rush
Match the target colour shown on screen. Pop bubbles of the correct colour to score points and extend your timer. Build combos for multiplied points. Difficulty increases, swapping easy bright colours for harder similar-hue colours.

## Bubble Types

| Type | Appearance | Behaviour |
|------|-----------|-----------|
| Normal | Coloured sphere | Single tap to pop, earns points |
| Double | Slightly larger | Requires 2 taps, worth more points |
| Decoy | Dark/black | Costs points — avoid! |

## Tests

```bash
node tests/puppeteer-test-tc101.js   # Requires puppeteer installed and a running game server
```

## Project Structure

```
src/
  js/
    main.js              # Entry point and DOM wiring
    game.js              # Game orchestrator and mode registry
    ClassicMode.js       # 60-second timed mode
    SurvivalMode.js      # Survival mode with adaptive difficulty
    ColourRushMode.js    # Colour matching mode with combos
    bubbles.js           # Bubble class and physics
    canvasManager.js     # Canvas rendering and resize
    BubbleSpawnConfig.js # Weighted bubble spawn system
    ColourRushConfig.js  # Colour Rush constants and difficulty config
    ScoringEngine/       # Centralised score calculation
    effects/             # Visual effects (pop, float, splat)
    ui/                  # UI components
  styles/                # CSS
icons/                   # PWA icons (72px - 1024px)
index.html               # App entry point
manifest.json            # PWA manifest
sw.js                    # Service worker
```
