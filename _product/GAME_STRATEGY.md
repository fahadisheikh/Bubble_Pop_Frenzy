# Bubble Pop Frenzy — Product Strategy Document

> **Version:** 1.0  
> **Date:** 4 March 2026  
> **Author:** Dave (AI Product Strategist)  
> **Status:** Draft — awaiting Fahad's review

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Current State Assessment](#current-state-assessment)
3. [Market Landscape](#market-landscape)
4. [Gap Analysis](#gap-analysis)
5. [Feature Roadmap](#feature-roadmap)
6. [Technical Path to Native](#technical-path-to-native)
7. [Kids Game Design Principles](#kids-game-design-principles)
8. [Monetisation Strategy](#monetisation-strategy)
9. [Success Metrics](#success-metrics)
10. [Risk Register](#risk-register)

---

## Executive Summary

**Bubble Pop Frenzy** is a vanilla JavaScript / HTML5 Canvas bubble-popping game built with Vite, currently deployed as a PWA. It has **three game modes** (Classic, Survival, Colour Rush), a modular codebase, and solid architectural foundations — but it's missing the polish, progression, audio, and platform presence needed to compete on the App Store and Google Play.

### The Vision

Transform Bubble Pop Frenzy into a **top-charting kids bubble game** (ages 4–10) on iOS and Android by:

1. **Polishing the core experience** — sound, haptics, visual juice, performance
2. **Adding progression and retention loops** — levels, stars, unlockables, daily challenges
3. **Shipping native apps** via Capacitor (Vite → iOS/Android in weeks, not months)
4. **Monetising ethically** — premium unlock or cosmetic-only IAP, zero dark patterns

### Target Market

- **Primary:** Kids ages 4–10 (pre-readers to early gamers)
- **Secondary:** Parents seeking safe, ad-free games
- **Geography:** Global, English-first, with easy localisation path
- **Platforms:** iOS App Store + Google Play (web PWA as bonus channel)

### Why Now?

The kids' casual game market is massive ($4.9B+ in 2024) and bubble games remain evergreen. Most competitors are bloated with ads and predatory IAP. There's a clear gap for a **premium-quality, parent-approved** bubble game with modern design and ethical monetisation.

---

## Current State Assessment

### What We Have (Strengths)

| Area | Details |
|------|---------|
| **Game Modes** | 3 distinct modes: Classic (60s timed), Survival (escalating difficulty), Colour Rush (color matching) |
| **Architecture** | Clean modular JS — game orchestrator + mode classes + config-driven spawning + scoring engine |
| **Bubble Types** | Normal, Double (2-tap), Decoy (penalty) — good variety for a foundation |
| **Effects System** | Floating text, countdown, pop effects, splat effects — extensible EffectManager |
| **PWA Ready** | Full manifest.json, service worker, icons (72px → 1024px), fullscreen portrait mode |
| **Build System** | Vite — fast dev, clean builds, trivial Capacitor integration |
| **Difficulty Scaling** | Survival mode has adaptive difficulty based on player miss rate — smart design |
| **Colour Rush** | Combo system, star ratings, difficulty levels, color matching — most feature-rich mode |

### What We're Missing (Gaps)

| Gap | Impact | Priority |
|-----|--------|----------|
| **🔇 No sound at all** | Game feels dead. Sound is 50%+ of "juice" in casual games | 🔴 Critical |
| **No music** | No ambient loop, no mode-specific tracks | 🔴 Critical |
| **No score persistence** | Scores vanish on reload. No high scores, no history | 🔴 Critical |
| **No progression system** | No levels, no stars, no unlockables — zero reason to return | 🔴 Critical |
| **No onboarding/tutorial** | New players (especially kids) get zero guidance | 🟡 High |
| **No character/theme system** | Kids love customisation — biggest engagement lever missing | 🟡 High |
| **No power-ups** | Bomb, freeze, rainbow — standard bubble game features absent | 🟡 High |
| **No accessibility** | No colorblind mode (critical for Colour Rush!), no font scaling | 🟡 High |
| **No analytics** | Zero visibility into player behaviour | 🟡 High |
| **No parental controls** | Required for kids' app store compliance | 🟡 High |
| **No offline support** | SW registered but no caching strategy for assets | 🟠 Medium |
| **Empty README** | No documentation for contributors | 🟠 Medium |
| **Empty vite.config.js** | No build optimisation configured | 🟠 Medium |
| **Single test file** | Only 1 Puppeteer E2E test | 🟠 Medium |

---

## Market Landscape

### Top 5 Competitor Games

#### 1. **Bubble Witch 3 Saga** (King)
- **Downloads:** 100M+ (Google Play)
- **Core Loop:** Aim-and-shoot bubble matching with level-based progression
- **Retention:** 2,000+ levels, daily boosters, limited lives (energy system), seasonal events
- **Monetisation:** Free-to-play with IAP for lives, boosters, extra moves
- **What makes it sticky:** Story-driven progression, satisfying chain reactions, social features
- **Weakness:** Aggressive monetisation, not specifically for kids

#### 2. **Bubble Shooter Rainbow** (Various publishers)
- **Downloads:** 50M+ across clones
- **Core Loop:** Classic aim-shoot-match-3 bubbles
- **Retention:** Level-based with star ratings, power-ups, daily challenges
- **Monetisation:** Ad-supported + IAP for power-ups
- **What makes it sticky:** Simple mechanics, colourful visuals, 3-star completionism
- **Weakness:** Ad-heavy, low production value

#### 3. **Pop It! Sensory Fidget Game** (various)
- **Downloads:** 50M+ (Google Play top charts in kids)
- **Core Loop:** Tap to pop — satisfying sensory feedback (sound + haptics)
- **Retention:** Many "toy" modes, customisation, ASMR-style audio
- **Monetisation:** Ad-supported, premium ad-free option
- **What makes it sticky:** Sensory satisfaction, fidget/stress relief, toddler-friendly
- **Weakness:** No real gameplay depth, one-note experience

#### 4. **Toca Boca games** (Toca Boca)
- **Downloads:** 100M+ across franchise
- **Core Loop:** Open-ended creative play
- **Retention:** New content packs, character collection, world-building
- **Monetisation:** Premium purchase + subscription (Toca Life World)
- **What makes it sticky:** Parent trust, brand safety, creative freedom, high production value
- **Weakness:** Not a "game" — no scoring or challenge

#### 5. **Candy Crush Saga** (King)
- **Downloads:** 1B+ (Google Play)
- **Core Loop:** Match-3 puzzle with cascading effects
- **Retention:** 15,000+ levels, daily challenges, team events, seasonal content
- **Monetisation:** Free + aggressive IAP
- **What makes it sticky:** Dopamine cascade effects, social competition, "just one more level"
- **Weakness:** Not kid-focused, highly addictive by design

### What Makes These Games Tick — Common Patterns

1. **Satisfying feedback loops** — visual + audio + haptic on every action
2. **Progressive difficulty** — easy start, gradual challenge increase
3. **Level/star systems** — completionism drives replay
4. **Daily engagement hooks** — daily challenges, login rewards, streaks
5. **Visual customisation** — themes, characters, skins
6. **Social elements** — leaderboards, friend challenges (scoped for safety in kids games)
7. **Power-ups** — strategic depth + "wow" moments
8. **Cascading effects** — chain reactions that feel amazing

### Market Gap — Our Opportunity

| What exists | What's missing |
|------------|----------------|
| Bubble shooters (aim-and-fire) | **Tap-to-pop** bubble games with multiple modes |
| Ad-heavy kids games | **Premium/ethical** kids bubble games |
| Single-mode bubble games | **Multi-mode** variety (Classic + Survival + Colour Rush) |
| Static difficulty | **Adaptive difficulty** that adjusts to player skill |
| Generic bubble games | **Colour-learning** integrated into gameplay (Colour Rush) |

**Our differentiation:** Bubble Pop Frenzy is the only tap-to-pop bubble game with 3+ distinct modes, adaptive difficulty, a colour-matching educational angle, and a commitment to ethical kids' design. We're not a bubble shooter clone — we're a **bubble playground**.

---

## Gap Analysis

### Current State vs Market Leaders

| Feature | BPF Today | Market Leaders | Gap |
|---------|-----------|---------------|-----|
| Sound/Music | ❌ Silent | ✅ Rich audio | 🔴 Critical — must fix before launch |
| Progression (levels) | ❌ None | ✅ 100s–1000s of levels | 🔴 Need at least 30 levels for launch |
| Star ratings | ⚠️ Colour Rush only | ✅ Every level rated | 🟡 Extend to all modes |
| Score persistence | ❌ In-memory only | ✅ Cloud-synced | 🔴 localStorage minimum, cloud later |
| Power-ups | ❌ None | ✅ 3-5 per game | 🟡 Add 3 for launch |
| Customisation | ❌ None | ✅ Themes, characters | 🟡 2-3 themes for launch |
| Daily challenges | ❌ None | ✅ Standard feature | 🟠 v1.5 feature |
| Tutorial | ❌ None | ✅ Guided onboarding | 🟡 Simple overlay tutorial |
| Accessibility | ❌ None | ⚠️ Varies | 🟡 Colorblind mode essential for Colour Rush |
| Parental controls | ❌ None | ✅ Required for kids | 🔴 Required for store compliance |
| Analytics | ❌ None | ✅ Deep analytics | 🟡 Basic events for launch |
| Haptics | ⚠️ Basic vibrate | ✅ Rich patterns | 🟠 Enhance post-launch |

### Target Age Range Decision

**Recommended: Ages 4–10 (primary), with 3–12 as the full range**

Rationale:
- **Ages 3–4:** Tap-to-pop is perfect for toddlers developing motor skills. Classic mode works as-is.
- **Ages 5–7:** Colour Rush teaches colour recognition. Survival adds challenge.
- **Ages 8–10:** Combo systems, star ratings, and leaderboards add competitive depth.
- **Ages 11–12:** May find it too simple unless we add advanced modes later.

This age range aligns with:
- **COPPA** (Children's Online Privacy Protection Act) — under 13
- **App Store Kids category** — all ages, with strict content rules
- **Google Play Designed for Families** — similar requirements

---

## Feature Roadmap

### Phase 0: MVP Polish (Pre-launch — 2-4 weeks)

> **Goal:** Make the game feel complete and "alive" enough to ship.

| Feature | Details | Effort |
|---------|---------|--------|
| 🔊 **Sound effects** | Pop sounds (multiple variations), miss sound, decoy penalty, combo sounds, countdown beeps, game over jingle | 3-5 days |
| 🎵 **Background music** | 1 menu track + 1 per mode (3 tracks). Royalty-free or AI-generated. Mute toggle. | 2-3 days |
| 💾 **Score persistence** | High scores per mode in localStorage. Show best score on game over. | 1 day |
| 📱 **App icon + splash** | Professional icon, splash screen for native apps | 1-2 days |
| 📖 **Basic tutorial** | First-play overlay: "Tap bubbles to pop them! Avoid the dark ones!" | 1-2 days |
| 🎯 **Capacitor integration** | Wire up Capacitor for iOS + Android builds (see Technical Path) | 2-3 days |
| ⚡ **Performance pass** | Canvas optimisation, requestAnimationFrame cleanup, object pooling for bubbles | 2 days |
| 🔧 **Vite config** | Production build optimisation, asset hashing, compression | 0.5 day |
| 🧪 **Basic test suite** | Unit tests for ScoringEngine, BubbleSpawnConfig. Expand Puppeteer E2E. | 2-3 days |

**Exit criteria:** Game has sound, saves scores, runs on iOS/Android via Capacitor, passes basic QA.

### Phase 1: v1.0 Launch (4-6 weeks after Phase 0)

> **Goal:** App Store + Google Play launch with enough content to retain players for 2+ weeks.

| Feature | Details | Effort |
|---------|---------|--------|
| ⭐ **Level/star system** | 30 levels per mode (90 total). Each level has target score for 1/2/3 stars. Progressive difficulty. | 2 weeks |
| 🎨 **Theme system** | 3 themes: Default (warm yellow), Ocean (blue), Space (dark). Themes change background, bubble colours, effects. | 1 week |
| 💥 **Power-ups (3)** | **Bomb Bubble** (pops adjacent), **Rainbow Bubble** (matches any colour in CR), **Time Freeze** (5s slowdown) | 1 week |
| 🏆 **High score board** | Local leaderboard per mode. Show top 10 scores with date. | 2-3 days |
| 👶 **Parental gate** | Simple math puzzle gate for settings/purchases (e.g., "What is 14 + 7?") | 2 days |
| ♿ **Colorblind mode** | Pattern overlays on bubbles (stripes, dots, stars) + high-contrast colour palette | 3-4 days |
| 📊 **Basic analytics** | Firebase Analytics: session length, mode played, levels completed, retention | 2-3 days |
| 🔒 **Privacy compliance** | COPPA-compliant privacy policy. No personal data collection from children. | 1-2 days |
| 🌐 **Localisation framework** | i18n setup. Launch in English. Structure for Arabic, Spanish, French. | 2 days |

**Exit criteria:** 90 levels, 3 themes, 3 power-ups, store-ready with privacy compliance.

### Phase 2: v1.5 Engagement (6-8 weeks after v1.0)

> **Goal:** Retention mechanics to keep players coming back daily.

| Feature | Details | Effort |
|---------|---------|--------|
| 📅 **Daily challenge** | 1 unique challenge per day (specific mode + constraints). Reward: coins/stars. | 1 week |
| 🔥 **Streak system** | Consecutive days played tracker. Streak rewards at 3/7/14/30 days. | 3-4 days |
| 🏅 **Achievement badges** | 20 achievements: "Pop 1000 bubbles", "Perfect Colour Rush round", "Survive 3 minutes", etc. | 1 week |
| 👤 **Character system** | 5 collectible characters (cute animals). Each has a unique pop animation. Unlocked via stars. | 1-2 weeks |
| 🎁 **Daily login reward** | 7-day rotating reward calendar. Coins, power-ups, character unlocks. | 3-4 days |
| 💰 **Coin economy** | Earn coins from gameplay. Spend on power-ups and cosmetics. | 1 week |
| 🌍 **Localisation** | Arabic (RTL), Spanish, French translations | 1 week |

**Exit criteria:** Players have daily reasons to return. 7-day retention > 25%.

### Phase 3: v2.0 Growth (8-12 weeks after v1.5)

> **Goal:** Social features and content depth for long-term growth.

| Feature | Details | Effort |
|---------|---------|--------|
| 👨‍👩‍👧 **Family leaderboards** | Private family/friends leaderboards via share codes (no accounts needed) | 2 weeks |
| 🗺️ **World map** | Visual level progression map (like Candy Crush) with themed worlds | 2 weeks |
| 🎮 **New mode: Pattern Pop** | Pop bubbles in a specific pattern/sequence. Memory + reaction. | 2 weeks |
| 🎮 **New mode: Zen Mode** | No timer, no score. Pure relaxation. ASMR-quality sounds. | 1 week |
| 🎭 **Seasonal events** | Halloween, Christmas, Eid themed content. Limited-time challenges + cosmetics. | 2 weeks per event |
| 🧩 **Level editor** | Simple level designer for advanced players. Share via codes. | 3-4 weeks |
| 📱 **Widget** | iOS/Android widget showing daily challenge or streak status | 1 week |
| 🔊 **ASMR sound pack** | Premium sound option with satisfying ASMR-quality pop sounds | 3-4 days |

---

## Technical Path to Native

### Architecture: Vite + Capacitor

Capacitor is the ideal bridge for this project because:
- Bubble Pop Frenzy is already a Vite-built web app with `index.html` entry
- Capacitor wraps web apps in native WebView (WKWebView on iOS, Android System WebView)
- Zero rewrite needed — same codebase ships everywhere
- Native plugin access for haptics, sound, storage, analytics

### Step-by-Step Integration

#### 1. Install Capacitor (Day 1)

```bash
cd ~/dev/code/vscode/Bubble_Pop_Frenzy

# Install Capacitor core + CLI
npm install @capacitor/core
npm install -D @capacitor/cli

# Initialize Capacitor
npx cap init "Bubble Pop Frenzy" com.bubblepopfrenzy.app

# Install platform packages
npm install @capacitor/android @capacitor/ios
```

#### 2. Configure Vite Build Output

Update `vite.config.js`:

```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0, // Don't inline assets (better for native)
    rollupOptions: {
      output: {
        manualChunks: undefined // Single bundle for simplicity
      }
    }
  },
  server: {
    host: true // Allow LAN access for device testing
  }
});
```

Update `capacitor.config.ts`:

```typescript
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bubblepopfrenzy.app',
  appName: 'Bubble Pop Frenzy',
  webDir: 'dist',
  server: {
    androidScheme: 'https' // Required for modern web APIs
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#FDEB71'
    }
  }
};

export default config;
```

#### 3. Add Native Platforms

```bash
# Build web assets first
npm run build

# Add platforms
npx cap add ios
npx cap add android

# Sync web assets to native projects
npx cap sync
```

#### 4. Essential Capacitor Plugins

```bash
# Haptics (enhanced vibration patterns)
npm install @capacitor/haptics

# Preferences (key-value storage, replaces localStorage for native)
npm install @capacitor/preferences

# Splash screen
npm install @capacitor/splash-screen

# Status bar control
npm install @capacitor/status-bar

# App lifecycle events
npm install @capacitor/app

# Screen orientation lock
npm install @capacitor/screen-orientation
```

#### 5. Development Workflow

```bash
# Daily development cycle
npm run build          # Build web assets
npx cap sync           # Sync to native projects
npx cap run ios        # Run on iOS simulator
npx cap run android    # Run on Android emulator

# Or use live reload during development
npx cap run ios --livereload --external
```

### iOS Requirements

| Requirement | Details |
|------------|---------|
| **Apple Developer Account** | $99/year. Required for App Store submission. |
| **Xcode** | Latest version (26.0+). macOS only. |
| **Certificates** | Distribution certificate + provisioning profile via Apple Developer portal |
| **App Store Connect** | Create app listing, screenshots (6.7" + 5.5" iPhone, iPad Pro) |
| **Age Rating** | Self-rate via App Store Connect questionnaire. Target: 4+ |
| **Privacy Labels** | Declare data collection (we collect none from kids = simple) |
| **Kids Category** | Must comply with Apple's guidelines for kids' apps: no third-party ads, no links out, parental gate for purchases |
| **Review Guidelines** | Section 1.3 (Kids Category) — strict rules on data, ads, external links |

### Android Requirements

| Requirement | Details |
|------------|---------|
| **Google Play Console** | $25 one-time fee |
| **Android Studio** | For building + testing |
| **Signing Key** | Generate keystore for release signing |
| **Play Console Setup** | App listing, screenshots, feature graphic, content rating |
| **Designed for Families** | Must comply with Google's Families policies |
| **Target API Level** | API 34+ (Android 14) required for new apps as of 2025 |
| **Content Rating** | IARC rating questionnaire. Target: Everyone / PEGI 3 |
| **Data Safety** | Declare data collection practices (minimal for us) |
| **Teacher Approved** | Optional but valuable badge — apply after launch |

### Testing Approach

| Phase | Method | Devices |
|-------|--------|---------|
| **Dev** | Live reload via Capacitor | iOS Simulator + Android Emulator |
| **Alpha** | Internal testing (TestFlight / Internal Test Track) | iPhone SE, iPhone 15, Pixel 7a, Samsung A54 |
| **Beta** | External testing | 20-50 real kids (parental consent required!) |
| **Performance** | Profile on low-end devices | iPhone 8, Pixel 4a, Samsung A13 (budget Android) |
| **Accessibility** | Screen reader + colorblind simulation | All test devices |

### Performance Considerations

Canvas-based games in WebView have specific challenges:
- **60fps target** — must maintain on low-end Android (budget Samsung/Xiaomi)
- **Object pooling** — recycle Bubble objects instead of creating/destroying
- **Batch canvas draws** — minimise context state changes
- **Asset preloading** — load all sprites/sounds before gameplay
- **Memory** — watch for leaks in bubble/effect arrays (splice operations)
- **Android WebView** — test on Chrome 60+ minimum; newer devices are fine

---

## Kids Game Design Principles

### Age-Appropriate Difficulty

| Age Group | Design Approach |
|-----------|----------------|
| **3-4 years** | Large bubbles, slow speed, no penalties, lots of positive feedback |
| **5-7 years** | Medium difficulty, gentle penalties, colour matching introduces learning |
| **8-10 years** | Full difficulty, combos, star chasing, competitive elements |

**Adaptive difficulty (already in Survival mode!)** should be extended to all modes:
- Track player miss rate
- If > 30% miss rate → ease up (slower bubbles, larger radius)
- If < 10% miss rate → increase challenge
- Never make a child feel like they're "failing"

### COPPA / GDPR-K Compliance

| Requirement | Our Approach |
|------------|-------------|
| **No personal data from children** | No accounts, no names, no email. Device-local storage only. |
| **No behavioural advertising** | No ads at all (premium model). If we add ads later: only contextual, no tracking. |
| **No social features with strangers** | Family leaderboards via share codes only. No public profiles. |
| **Parental gate** | Math puzzle gate for any settings, purchases, or external links. |
| **Privacy policy** | Clear, simple language. Linked from app and store listings. |
| **Data minimisation** | Analytics via Firebase with IP anonymisation. No user-level tracking. |
| **GDPR-K (EU)** | If we collect any data: verifiable parental consent. Prefer: collect nothing. |

### Parent-Friendly Features

1. **Play time reminder** — Optional gentle reminder after 20/30/45 min (configurable by parent behind parental gate)
2. **No infinite scroll / autoplay** — Game sessions have natural endpoints
3. **No external links** — All content self-contained. No YouTube, no web links.
4. **No chat / messaging** — Zero social interaction with strangers
5. **No loot boxes / gacha** — All unlockables are deterministic (earn stars → get reward)
6. **Volume control** — Obvious mute button. Respects device silent mode.
7. **Parent dashboard** (v2.0) — Play time stats, achievements earned, behind parental gate

### Safe Content Guidelines

- **No violence** beyond bubble popping (no weapons, no enemies dying)
- **No scary content** — friendly colours, cute characters, positive messaging
- **No time pressure anxiety** — timer should feel exciting, not stressful. Use encouraging language ("Great try!" not "You failed!")
- **Inclusive design** — diverse character designs, no gender stereotyping
- **No real-money imagery** — coins should look like game tokens, not currency

---

## Monetisation Strategy

### Recommended Model: **Freemium with Premium Unlock**

| Tier | Price | Content |
|------|-------|---------|
| **Free** | $0 | All 3 game modes, first 10 levels per mode (30 levels total), 1 theme, 1 character |
| **Premium Unlock** | $3.99–$4.99 (one-time) | All 90+ levels, all themes, all characters, all power-ups, daily challenges |

### Why This Model?

1. **Parent-friendly** — one payment, no surprises, no recurring charges
2. **Kid-safe** — no IAP prompts during gameplay
3. **App Store compliant** — Apple and Google both prefer this for kids' apps
4. **Conversion-friendly** — 30 free levels is enough to hook; premium feels like great value
5. **No ads** — cleaner experience, simpler compliance, better reviews

### Alternative: Cosmetic-Only IAP

If we want ongoing revenue (v2.0+):

| Item | Price | Notes |
|------|-------|-------|
| Theme packs (3 themes) | $1.99 | Seasonal or themed bundles |
| Character pack (3 characters) | $1.99 | Cute animals, monsters, etc. |
| Sound pack (ASMR) | $0.99 | Premium satisfying sounds |
| Mega bundle (everything) | $6.99 | Best value option |

**Rules for IAP in kids' apps:**
- ✅ Cosmetic only — no gameplay advantage
- ✅ Behind parental gate
- ✅ Clear pricing — no fake currencies
- ❌ No consumables that run out
- ❌ No "watch ad for reward"
- ❌ No time-gated content that pressures purchase
- ❌ No "limited time offers" creating urgency

---

## Success Metrics

### What Does "Popular" Look Like?

| Metric | 3 months | 6 months | 12 months |
|--------|----------|----------|-----------|
| **Downloads** | 10,000 | 50,000 | 200,000+ |
| **DAU** (Daily Active Users) | 500 | 2,500 | 10,000+ |
| **App Store Rating** | 4.5+ ⭐ | 4.5+ ⭐ | 4.7+ ⭐ |
| **D1 Retention** | 40% | 45% | 50% |
| **D7 Retention** | 20% | 25% | 30% |
| **D30 Retention** | 8% | 12% | 15% |
| **Avg Session Length** | 5 min | 7 min | 8 min |
| **Sessions/Day** | 1.5 | 2.0 | 2.5 |
| **Premium Conversion** | 3% | 5% | 7% |
| **Revenue** | $1,200 | $10,000 | $56,000+ |

### How to Measure "Addictiveness" Ethically for Kids

We don't want to create addiction. We want **healthy engagement**. Measure:

1. **Session length distribution** — Flag if many kids play > 30 min continuously. Add break reminders.
2. **Return rate** — High is good, but watch for compulsive patterns.
3. **Frustration signals** — Rapid taps after game over, immediate restarts without improvement = difficulty too high.
4. **Natural stopping points** — Kids should feel satisfied after completing a level, not anxious to start the next.
5. **Parent feedback** — In-app feedback mechanism (behind parental gate). "Is your child enjoying the game? Playing too much?"

### Key Analytics Events to Track

```
game_start (mode, difficulty)
game_end (mode, score, duration, stars_earned)
level_complete (level_id, stars, time, power_ups_used)
level_fail (level_id, score, time)
power_up_used (type, mode, level)
theme_changed (theme_id)
character_selected (character_id)
daily_challenge_complete (challenge_id, score)
achievement_unlocked (achievement_id)
premium_purchase (price, trigger_point)
session_start / session_end (duration)
play_time_reminder_shown / dismissed
```

---

## Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| **App Store rejection (kids category)** | Medium | High | Follow guidelines strictly. No ads, no tracking, parental gate. Pre-review checklist. |
| **Poor Android performance** | Medium | High | Test on budget devices early. Object pooling. Canvas optimisation. Performance budget: 60fps on Pixel 4a. |
| **WebView audio issues** | Medium | Medium | Use Web Audio API (not HTML5 Audio). Capacitor audio plugin as fallback. User gesture requirement for autoplay. |
| **Market saturation** | Low | Medium | Differentiate via multi-mode gameplay, ethical design, parent trust. |
| **Colour Rush accessibility** | High | Medium | Implement colorblind mode before launch. Use patterns, not just colours. |
| **Content moderation for family leaderboards** | Low | High | Share codes only, no free text input, no public profiles. |
| **COPPA violation** | Low | Very High | Collect zero personal data. Use anonymous analytics only. Legal review before launch. |
| **Capacitor WebView bugs** | Low | Medium | Keep Capacitor updated. Test on 10+ device configs. Have web fallback. |

---

## Appendix A: Codebase Architecture Summary

```
Bubble_Pop_Frenzy/
├── src/
│   ├── js/
│   │   ├── main.js              # Entry point, menu system
│   │   ├── game.js              # Game orchestrator (mode management, shared utilities)
│   │   ├── ClassicMode.js       # 60s timed mode
│   │   ├── SurvivalMode.js      # Escalating difficulty with time bonuses/penalties
│   │   ├── ColourRushMode.js    # Color matching with combos + star ratings
│   │   ├── bubbles.js           # Bubble class, spawning, collision detection
│   │   ├── canvasManager.js     # Canvas rendering, resize handling
│   │   ├── deviceManager.js     # Device detection
│   │   ├── BubbleSpawnConfig.js # Weighted spawn system, per-mode config
│   │   ├── ColourRushConfig.js  # Colour Rush constants + difficulty scaling
│   │   ├── ScoringEngine/       # Score calculation + config
│   │   ├── effects/             # Visual effects (pop, float, countdown, splat)
│   │   ├── ui/                  # UI components (buttons, message box, combo meter)
│   │   └── utils/               # Helpers (random color)
│   └── styles/                  # CSS (main + title animations)
├── icons/                       # PWA icons (72px → 1024px)
├── tests/                       # Puppeteer E2E (1 test)
├── manifest.json                # PWA manifest
├── sw.js                        # Service worker
├── index.html                   # Entry HTML
├── package.json                 # Vite only dependency
└── vite.config.js               # Empty (needs configuration)
```

### Key Design Decisions in Current Code

1. **Mode registry pattern** — Easy to add new modes (register class → appears in menu)
2. **Config-driven spawning** — Bubble types, weights, and rates are data, not code
3. **Scoring as service** — Centralised scoring engine, modes just call `handleBubblePop(type)`
4. **Effect manager** — Spawn-and-forget visual effects, auto-cleaned up
5. **Adaptive difficulty** — Survival mode adjusts based on miss rate (extend to all modes)

---

## Appendix B: Quick-Start Capacitor Commands

```bash
# First-time setup
npm install @capacitor/core @capacitor/cli @capacitor/ios @capacitor/android
npx cap init "Bubble Pop Frenzy" com.bubblepopfrenzy.app
npx cap add ios && npx cap add android

# Daily workflow
npm run build && npx cap sync
npx cap run ios          # iOS simulator
npx cap run android      # Android emulator
npx cap open ios         # Open in Xcode
npx cap open android     # Open in Android Studio

# Add to package.json scripts:
"cap:sync": "npm run build && npx cap sync",
"cap:ios": "npm run build && npx cap sync && npx cap run ios",
"cap:android": "npm run build && npx cap sync && npx cap run android"
```

---

*Document produced by Dave. Ready for Fahad's review.*
*Next step: Fahad to approve roadmap priorities, then we kick off Phase 0 implementation.*
