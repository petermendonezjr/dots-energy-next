# Dots Energy Website — Full Project Context

> **Purpose:** This document gives ChatGPT complete context about the current state of the Dots Energy website so it can translate your verbal thoughts/directions into a precise Claude Code prompt.

---

## 1. What Is This?

A **Next.js 16** marketing/corporate website for **Dots Energy**, an infrastructure systems company focused on battery energy storage. The site is statically exported (`output: "export"`) and styled with **Tailwind CSS 4** via CSS custom properties.

**Live tech stack:**
- Next.js 16.1.6 (App Router, static export)
- React 19.2.3
- TypeScript 5
- Tailwind CSS 4 (via `@tailwindcss/postcss`)
- Fonts: Inter, Space Grotesk, JetBrains Mono (via `@fontsource`)
- No backend, no database, no API routes

---

## 2. Site Structure & Routes

| Route | File | What It Does |
|-------|------|-------------|
| `/` | `src/app/page.tsx` | Homepage: hero, 4 pillars grid, stats bar, global presence teaser, CTA |
| `/approach` | `src/app/approach/page.tsx` | Infrastructure systems philosophy, component-vs-platform comparison, design philosophy, global model |
| `/capabilities` | `src/app/capabilities/page.tsx` | Four pillars detail: PowerPath, PowerCore (products), PowerOps (field stats), NodeX (software platform) |
| `/assets` | `src/app/assets/page.tsx` | Interactive SVG world map (Globe component) + asset list with all locations |
| `/about` | `src/app/about/page.tsx` | Two-geography model (Seoul R&D + US Ops), mission statement |
| `/connect` | `src/app/connect/page.tsx` | Contact form (name, email, company, message). TODO: Brevo integration |

**Missing pages:** Footer links to `/privacy`, `/terms`, `/careers` — pages don't exist yet.

---

## 3. Layout & Navigation

**Root Layout** (`src/app/layout.tsx`):
- `<html data-theme="site-b">` (default light theme)
- `ThemeProvider` wrapping everything
- `Header` (fixed, sticky, z-50) → `Footer`
- `<main className="pt-16">` for header offset

**Header** (`src/components/layout/Header.tsx`):
- Logo: 3 colored dots + "Dots Energy" text
- Nav links: Approach, Capabilities, Assets, About (hidden on mobile)
- Theme switcher ("Deck" / "Minimal" toggle)
- "Connect" CTA button

**Footer** (`src/components/layout/Footer.tsx`):
- Logo dots + copyright
- Links: Privacy, Terms, Careers

---

## 4. Theming System

Two complete themes switchable via a toggle in the header:

**Site A ("Deck") — Dark:**
- Background: `#0D0D1A` (deep navy)
- Accent: `#E8751A` (bright orange)
- Headings: Space Grotesk
- Body: Inter

**Site B ("Minimal") — Light (default):**
- Background: `#FFFFFF`
- Accent: `#C2713A` (rust/brown)
- Headings & body: Inter

**Implementation:**
- CSS variables in `globals.css` under `[data-theme="site-a"]` and `[data-theme="site-b"]`
- Tailwind `@theme inline` block bridges CSS vars to Tailwind utility classes (e.g., `bg-bg-primary`, `text-accent`)
- React context (`src/lib/theme-context.tsx`) manages state, persists to `localStorage("dots-theme")`, sets `data-theme` on `<html>`

---

## 5. Key Components

### Interactive Globe (`src/components/globe/`)

An SVG-based world map (not 3D) on the `/assets` page:
- **Globe.tsx** — Orchestrator: state for selected marker, renders MapView + MarkerPopup
- **MapView.tsx** (457 lines) — The main SVG map:
  - Pacific-centered equirectangular projection (1000x500 viewport)
  - Land masses from pre-generated SVG paths (`world-path.ts`)
  - Animated dashed arcs from Seoul to US cities
  - Color-coded markers: Blue (offices), Amber (BESS), Green (microgrids)
  - Baltimore cluster marker (16 sites collapsed into one dot with count badge)
  - Hover effects with glow filters and name labels
  - Click-to-expand Baltimore site picker dropdown
  - Legend at bottom with counts per type
  - Keyboard accessible (Enter/Space)
- **MarkerPopup.tsx** — Modal showing location details (type-specific: office/battery/microgrid)
- **AssetList.tsx** — Stats bar + card grid for all locations below the map
- **arc-utils.ts** — Generates quadratic Bezier SVG paths between lat/lng pairs
- **world-path.ts** — Massive file with pre-generated SVG path strings for continents + `latLngToSvg()` converter

### Layout Components (`src/components/layout/`)
- Header.tsx, Footer.tsx, ThemeSwitcher.tsx (described above)

---

## 6. Data Model

**Types** (`src/lib/types.ts`):
```
LocationType = "office" | "battery-storage" | "community-microgrid"
ProjectStatus = "Operational" | "Under Construction" | "Planned" | "Contracted"

BaseLocation: { id, name, lat, lng, city, state?, country, type, status, description }
OfficeLocation: BaseLocation + { function, focus }
BatteryProject: BaseLocation + { capacityMWh, capacityMW, market, commissioned? }
CommunityMicrogrid: BaseLocation + { solarKW, batteryKWh, solarInstallation, program }

GlobeLocation = union of the three
ArcData: { id, startLat, startLng, endLat, endLng, label }
```

**Data** (`src/lib/globe-data.ts`):
- 2 offices: Seoul R&D Center, Los Angeles Operations
- 7 battery projects: Desert Ridge (50MW), Bayview (5MW), Gulf Coast (100MW), Great Plains (75MW), Peachtree (25MW), Northeast Corridor (30MW), Pacific Gateway (15MW)
- 16 Baltimore Community Resilience Hubs (community microgrids, all "Contracted" status)
- 3 connection arcs: Seoul → LA, Seoul → Houston, Seoul → Baltimore
- Aggregated stats: 7 BESS projects, 320 MW, 1,280 MWh, 16 Baltimore sites, 1,035 kW solar, 3,500 kWh battery, 2 countries

---

## 7. Branding & Copy

- **Company name:** Dots Energy
- **Tagline:** Power in Motion™
- **Trademarks:** PowerPath™, PowerCore™, PowerOps™, NodeX™, Sodium Plus™, Mobile Plus™, Pole Plus™
- **Contact:** info@dotsenergy.com
- **Four Pillars:** PowerPath (Project Dev), PowerCore (Hardware), PowerOps (Field Services), NodeX (Software)
- **Products (PowerCore):** Sodium Plus Container (3 MWh), Sodium Plus Pod (250 kWh), Mobile Plus Battery (second-life EV), Pole Plus Battery (pole-mounted)
- **Key copy themes:** "Turning static infrastructure into a living energy network", systems vs components, resilient-first + replication-first design philosophy, Develop in Korea / Scale in America

---

## 8. Design Patterns & Conventions

- All pages follow: Hero section → Content sections → CTA band
- Section styling: alternating `bg-bg-primary` / `bg-bg-secondary` with `border-t border-border` separators
- Consistent spacing: `py-20 px-6` or `py-24 px-6` sections, `max-w-4xl` or `max-w-5xl mx-auto` containers
- Labels use `text-xs font-mono tracking-widest uppercase text-text-muted`
- Cards use `border border-border rounded-lg bg-bg-card` pattern
- CTA buttons: primary = `bg-accent text-white`, secondary = `bg-text-primary text-bg-primary`
- Mobile: nav hidden on `md:` breakpoint, no hamburger menu yet
- No images/photos used anywhere — pure text + SVG
- Accessibility: reduced motion media query, keyboard navigation on globe, ARIA labels

---

## 9. File Tree

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx          (home)
│   ├── globals.css
│   ├── about/page.tsx
│   ├── approach/page.tsx
│   ├── capabilities/page.tsx
│   ├── assets/page.tsx
│   └── connect/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeSwitcher.tsx
│   └── globe/
│       ├── Globe.tsx
│       ├── MapView.tsx
│       ├── MarkerPopup.tsx
│       ├── AssetList.tsx
│       ├── arc-utils.ts
│       └── world-path.ts
├── hooks/
│   └── useReducedMotion.ts
└── lib/
    ├── types.ts
    ├── globe-data.ts
    └── theme-context.tsx
```

---

## 10. Known TODOs / Gaps

1. Contact form has no backend — `handleSubmit` just sets `submitted=true` (TODO: Brevo integration)
2. Footer links to `/privacy`, `/terms`, `/careers` — pages don't exist
3. No mobile hamburger menu — nav links hidden below `md:` breakpoint
4. No images or photography anywhere
5. No API routes, no middleware
6. `world-path.ts` is very large (pre-generated SVG paths) — generated by `scripts/generate-world-paths.mjs`

---

## How To Use This Document

When dictating your thoughts to ChatGPT, it has full context about:
- Every page, component, and data structure
- The theming system and design patterns
- The tech stack and conventions
- What exists and what's missing

Ask ChatGPT to produce a **specific, actionable prompt for Claude Code** that references exact file paths, component names, CSS variables, and coding conventions from this project.
