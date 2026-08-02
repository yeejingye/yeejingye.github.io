# Project Overview

This repository contains the source code for a personal portfolio website designed to present the author as a whole person, not just a professional profile.

The site emphasizes:
- Personal identity and narrative
- Professional research and projects
- Quiet, symbolic expressions of faith
- Long-term reflection through a living personal archive

The website must feel: Professional, vibrant, stable, and quietly grounded
This is not a product, SaaS platform, or dashboard. It is a human-centered portfolio.

# Core Design & Emotional Principles (Critical)

When generating or modifying code, always respect these principles:
1. Restraint over expressiveness
  Avoid decorative UI, heavy animations, or visual noise.
2. Meaning over explanation
  Especially for faith-related content: no labels, no commentary, no framing.
3. Consistency over novelty
  Visual systems evolve subtly, never abruptly.
4. Human before impressive
  The site should feel calm, thoughtful, and intentional.

If a change makes the site feel louder, trendier, or more “product-like”, it is likely incorrect.

# Tech Stack in Use
## Frontend (Only)
- Vite — build tool
- React — UI framework
- TypeScript — required for all frontend code
- Tailwind CSS — styling and design system
- shadcn/ui — base UI components (used sparingly)

## Backend
- No backend required
- No databases
- No authentication
- Static or content-driven site only

# Project Structure
frontend/
├─ src/
│  ├─ assets/          # Images, icons, logo marks
│  ├─ components/      # Reusable UI components
│  │  ├─ archive/      # Personal Archive components
│  │  ├─ layout/       # Layout, navigation, footer
│  │  └─ ui/           # Low-level UI primitives
│  ├─ pages/
│  │  ├─ About.tsx     # Emotional core of the site
│  │  ├─ Contact.tsx     # Emotional core of the site
│  │  ├─ Index.tsx     # Emotional core of the site
│  │  ├─ NotFound.tsx     # Emotional core of the site
│  │  ├─ Projects.tsx
│  │  └─ Publications.tsx
│  ├─ styles/          # Global styles and Tailwind config
│  ├─ utils/           # Helpers and constants
│  └─ main.tsx         # Application entry point
├─ index.html
├─ vite.config.ts
└─ package.json

# Personal Archive System (Very Important)
The Personal Archive is a core feature and must follow these rules strictly.

## Concept
- Lives inside the About Me page
- Represents a living personal archive
- Each year is a quiet collection of symbolic artifacts
- No explanations, reflections, or labels

## Structure (Per Year)
Each year contains exactly three artifacts:
1. Motto of the Year
- Includes a logo
- Logo appears only here
- Motto is the visual anchor
2. Soundtrack of the Year
- One-line listening note
- No embeds
- No autoplay
- Optional external link only
3. Scripture of the Year
- Displayed as a typographic pull-quote
- Serif font
- Muted color
- No commentary

## Behaviour
- Years are collapsed by default
- Expand/collapse uses subtle height + opacity transitions
- Animation duration: 200–300ms
- No special animations for faith-related content

## Visual Evolution Rules
Each year may evolve only through:
- A slightly tinted accent color (derived from global accent)
- Subtle spacing rhythm changes

Explicitly forbidden:
- Changing fonts per year
- Background color blocks

# Styling & Design System Rules
## Typography
- Headings: clean geometric sans-serif
- Body text: 16–18px, line-height ≥ 1.6
- Quotes / Scripture: serif font only
- Do not mix more than two font families

## Color Usage
- Global palette is minimal
- Accent color used sparingly
- Archive accent tints ≤ 5% visual presence
- No color used purely for decoration

## Layout
- 8pt grid system
- Generous whitespace
- Prefer single-column layouts
- Asymmetry only when intentional and subtle

# UI & Component Guidelines
- Components should be small and focused
- If a component exceeds ~200 lines, split it
- Reusable components belong in components/
- Archive-related components belong in components/archive/
- Avoid deeply nested component trees

# Content Sensitivity Rules
When working with:
- Faith-related content
- Scripture
- Personal symbols
Always:
- Present them neutrally
- Avoid emphasis or framing
- Treat them like personal artifacts, not statements
If unsure, default to less.

# Coding Guidelines
- Always use TypeScript with strict typing
- Use semicolons consistently
- Prefer composition over inheritance
- Keep logic out of JSX when possible
- No unnecessary abstractions
- No premature optimization

# Accessibility Requirements
- WCAG AA contrast minimum
- Full keyboard navigation
- Semantic HTML
- ARIA labels for expandable archive entries
- Motion should respect reduced-motion preferences when possible

# What This Project Is NOT
❌ A dashboard
❌ A SaaS product
❌ A CMS
❌ A blog platform
❌ A branding experiment

It is a quiet, intentional personal space.

# Final Instruction for AI Assistants
When suggesting code, structure, or UI:
- Optimize for clarity, restraint, and longevity.
- If a suggestion feels impressive but not human, discard it.

# Deployment
This website is deployed to GitHub Pages from this repo, and `yeejingye.com` points to it via the repo `CNAME`.

Important (Vite + Pages):
- Always deploy the built output (`dist/`), not the source repo root. Serving source will try to load `/src/main.tsx` and can trigger MIME errors ("application/octet-stream") and missing `/assets/*`.
- Preferred setup: GitHub Pages **Source = GitHub Actions** using `/.github/workflows/pages.yml` (uploads `dist/` and includes `CNAME` + `.nojekyll`).
- Keep `VITE_BASE=/` for the custom-domain site root; do not change `base` unless the hosting path changes.