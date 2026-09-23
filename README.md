# AERION — THE ART OF MOTION

A production-quality, cinematic supercar showcase and developer portfolio website built for the fictional futuristic hypercar concept **AERION**.

Featuring a 240-frame sequential canvas scroll-driven animation, custom luxury typography, metallic editorial aesthetic, and real-time reactive telemetry.

---

## Overview

AERION transforms video-grade rendering into an interactive 3D-like scrolling experience on the web. As the user navigates through the page, a high-performance 2D Canvas engine interpolates 240 sequential animation frames at 60 FPS, seamlessly synchronizing the vehicle's perspective with narrative storytelling sections.

- **100% Static & Blazing Fast**: Zero database, zero CMS, zero server-side state.
- **Cinematic Scroll Synchronization**: GSAP ScrollTrigger paired with linear-interpolated (`lerp`) frame stepping for ultra-smooth camera panning.
- **Luxury Automotive Aesthetic**: Deep obsidian palette (`#050505`), brushed silver accents, and clean editorial typography.
- **Production Hardened**: Pre-configured security headers, device pixel ratio (DPR) scaling, aspect-ratio containment, and semantic accessibility.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router) + React 18 + TypeScript
- **Styling**: Tailwind CSS with custom dark luxury tokens
- **Animation & Scroll**: GSAP + ScrollTrigger
- **Rendering**: HTML5 Canvas 2D with aspect-ratio contain & frame preloading
- **Icons**: Lucide React
- **Typography**: Syncopate, Inter & JetBrains Mono

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/saimdev68-cmd/Aerion.git
cd Aerion
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## Architecture

```text
aerion/
├── public/
│   ├── images/              # 240 sequential cinematic supercar frames (frame_001.jpg .. frame_240.jpg)
│   ├── favicon.svg          # Minimal geometric AERION delta favicon
│   ├── logo-mark.svg        # AERION delta emblem
│   └── logo.svg             # Complete AERION typographic vector logo
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout, metadata & fonts
│   │   ├── page.tsx         # Master page combining canvas layer & narrative sections
│   │   └── globals.css      # Core dark theme and typography styles
│   ├── components/
│   │   ├── cinematic/
│   │   │   ├── FrameCanvas.tsx       # 60 FPS lerp-driven sequential frame renderer
│   │   │   ├── ScrollController.tsx  # GSAP ScrollTrigger timeline manager
│   │   │   └── LoadingScreen.tsx     # Minimal luxury loader (AERION / LOADING)
│   │   ├── navigation/
│   │   │   └── Navbar.tsx            # Floating glass navigation bar
│   │   └── sections/
│   │       ├── Hero.tsx              # Hero introduction & scroll prompt
│   │       ├── Design.tsx            # Aerodynamic philosophy & vortex channels
│   │       ├── Performance.tsx       # High-contrast technical specifications
│   │       ├── Engineering.tsx       # Core engineering pillars
│   │       └── FinalSection.tsx      # Final showcase & replay trigger
│   ├── hooks/
│   │   └── useFrameSequence.ts       # Image preloading & cache management
│   └── lib/
│       └── constants.ts              # Car telemetry & section data
└── next.config.mjs          # Security headers & build configuration
```

---

## Key Features

1. **Continuous 240-Frame Sequence**: Smoothly tracks through 6 narrative chapters:
   - `001 - 045`: Front ¾ Dramatic Profile (Hero)
   - `046 - 095`: Aerodynamic Side Line & Venturi Inlets (Design)
   - `096 - 150`: Rear Aero Spoiler & Diffuser (Performance)
   - `151 - 195`: Structural Monocoque & Powertrain (Technology)
   - `196 - 240`: 360 Full Dynamic Stance (Final Reveal)
2. **Device Pixel Ratio & Aspect Ratio Scaling**: Automatic high-DPI crisp rendering on Retina and 4K displays while preserving the car's aspect ratio without stretching or letterbox clipping.
3. **Hardware Acceleration & Lenis-grade Smoothing**: RequestAnimationFrame tick loop decoupled from raw scroll events for zero jitter.
4. **Accessible & Responsive**: Fully responsive layout with semantic markup, mobile adaptations, and screen-reader support.

---

## License

MIT License. Designed and built as an automotive design concept and developer showcase.
