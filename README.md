# VELOCITÀ — Cinematic 3D Supercar Website

A production-quality, cinematic 3D automotive website built for fictional Italian luxury hypercar brand **VELOCITÀ** ("Speed"). Designed as an impressive visual showcase and developer portfolio project.

## Tech Stack
- **Framework**: Next.js 14 (App Router) + React 18 + TypeScript
- **Styling**: Tailwind CSS with custom dark luxury tokens
- **3D Engine**: Three.js + React Three Fiber (`@react-three/fiber`) + `@react-three/drei`
- **Post-Processing**: Selective Bloom, Vignette, and Film Noise
- **Animation**: Camera Crane Lerping, Document Scroll Synchronization, and Upward Counter Metrics
- **Sound**: Synthesized Web Audio API sound effects (engine rev, headlight ignition, click feedback)
- **Icons**: Lucide React

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## Custom 3D Model Support
The project includes a built-in, high-fidelity procedural 3D supercar fallback with PBR clearcoat paint, alloy wheels, carbon wings, and working headlights that runs right out of the box.

If you have your own custom `.glb` supercar model:
1. Copy your model into:
   ```text
   public/models/supercar.glb
   ```
2. The site will automatically detect and load your custom model, binding body paint and headlights dynamically.
3. Refer to [`public/models/README.md`](./public/models/README.md) for scaling and mesh naming tips.

---

## Core Features
- **Cinematic Camera Crane**: Smoothly tracks through 7 narrative stages (Hero -> Design -> Performance -> Lighting Reveal -> Engineering -> Speed Tunnel -> 360 Turntable Final Reveal).
- **Mouse Parallax**: Subtle, smooth cursor-based camera movement.
- **Physical Headlight Interaction**: Dual Three.js `SpotLight`s with volumetric beam cones and floor reflections, plus manual high-beam pulse controls.
- **Live Atelier Color Customizer**: Switch real-time paint finishes between Rosso Corsa, Nero Satin, Grigio Titanio, Blu Elettrico, Verde Mantis, and Bianco Fuji Pearl.
- **Synthesized Audio Engine**: Realistic mechanical headlight relay click, xenon power surge, and V8 exhaust roar using Web Audio API (with mute toggle).
- **Graceful WebGL Error Handling**: Fallback display for devices lacking hardware acceleration.
- **Mobile Responsive & Accessibility**: Touch scrolling support, reduced-motion media query respect, and semantic SEO metadata.
