# Comuna 13, Medellin — 3D Interactive Virtual Tour & Investment Pitch

An interactive, procedural 3D web experience and live presentation deck showcasing the historical transformation, street art movement, social urbanism milestones, and community-centered investment opportunities of **Comuna 13 (San Javier)** in Medellin, Colombia.

## Key Features

- **100% Procedural 3D Scene (Zero External 3D Assets):** Built with **Three.js**, **React Three Fiber**, and **Drei**. Generates the Aburra Valley mountain ridges, 140+ terraced hillside houses with warm dynamic window lighting, the 6-section 384-meter outdoor electric escalators, procedural street-art mural canvases, the San Javier Metrocable gondolas, Casa Kolacho hip-hop stage, hillside viewpoints, and atmospheric particles entirely through code.
- **Cinematic Intro & Scroll-Guided Camera Tour:** Smooth GSAP + frame-damped camera transitions flying from high above the Aburra Valley down through 8 curated narrative stops.
- **6 Clickable 3D Hotspots:** Interactive markers for the *Outdoor Electric Escalators (2011)*, *Graffitour Murals & Memory Corridor*, *Hillside Viewpoints*, *Casa Kolacho & Hip-Hop Cultural School*, *Local Gastronomy & Micro-Commerce*, and *San Javier Metrocable Hub*, each opening an animated glassmorphism insight drawer.
- **Free Exploration Mode (`E` Key):** Unlock full 360-degree `OrbitControls` to rotate, pan, and zoom freely with mouse or touch input.
- **Day / Night Atmosphere Toggle (`N` Key):** Switch seamlessly between *Golden Eternal Spring Day* and *Vibrant Barrio Night* with dynamic point lights, glowing house windows, neon escalator roofs, and firefly particles.
- **Presentation & Gallery Mode (`←` `→`, `F`, `M` Keys):**
  - Navigate stops like slides using keyboard arrows (`←` `→` or `PageUp` / `PageDown`).
  - Press `F` to toggle Fullscreen for projector display.
  - Press `M` to toggle **Minimal-Text Gallery Mode** (optimized for live oral presentations where visuals take center stage).
  - Built-in **9-Minute Tour + 3-Minute Q&A Timer** synchronized with the 5 presentation moments (*Welcome, Guide, Share, Recommend, Chat*).
- **Verified Data, District Comparison & 2035 Simulator:** Animated counters, growth charts, a comparative scorecard (*Comuna 13 vs. El Poblado vs. Plaza Botero*), and an interactive 2035 consequence simulator (*Status Quo Overcrowding vs. Community-Backed Investment*).
- **Why Invest & Responsible Risk Mitigation:** Concrete opportunities across sustainable tourism, gastronomy, community lodging, creative arts, micro-entrepreneurship, and public infrastructure, paired with actionable solutions to overcrowding and gentrification.
- **Automatic & Manual 2D Lightweight Fallback:** Detects low-power or non-WebGL devices and offers a 1-click *Lite 2D Interactive Map* mode so the presentation runs smoothly on any classroom or boardroom projector.

---

## Tech Stack

- **Framework:** [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- **3D Engine:** [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations:** [GSAP](https://gsap.com/) + [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## Getting Started (Local Development)

### Prerequisites
- **Node.js** (LTS version 18.x, 20.x, or 22.x recommended)
- **npm** (included with Node.js)

### Installation & Local Server

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open the local URL displayed in your terminal (typically `http://localhost:5173`) in your browser.

### Production Build Verification

```bash
# Compile and bundle for production into ./dist
npm run build

# Preview the production build locally
npm run preview
```

---

## Deploying to Vercel

This project is pre-configured for zero-friction deployment on **Vercel** (`vercel.json` included, all asset paths relative, strict Linux case-sensitivity verified):

1. Push this project folder to a **GitHub** repository.
2. Log in to [Vercel](https://vercel.com/) and click **Add New... -> Project**.
3. Import your GitHub repository and verify the build settings:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

---

## Live Presenter Keyboard Shortcuts

| Key | Action |
| :--- | :--- |
| `→` or `PageDown` | Advance to next tour stop |
| `←` or `PageUp` | Return to previous tour stop |
| `1` – `6` | Fly camera directly to Hotspot 1–6 and open its panel |
| `N` | Toggle Day / Night lighting atmosphere |
| `E` | Toggle Free 3D Orbit Exploration Mode |
| `M` | Toggle Minimal-Text Gallery Mode (hide dense cards for live speaking) |
| `F` | Toggle Fullscreen Mode for projectors |
| `Esc` | Close active hotspot drawer or exit modal |
