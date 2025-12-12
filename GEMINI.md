# Ardent Design

A design system and showcase site for precision, intentional, and timeless digital interfaces by
Dhison P.

## Overview

This is a Next.js 16 application showcasing the Ardent Design system—a design philosophy emphasizing
intentionality, transparency, timelessness, and precision. The site demonstrates design tokens,
typography, color palette, and reusable UI components.

## Stack

- **Runtime:** Next.js 16 (App Router)
- **React:** 19.2.1
- **TypeScript:** 5.x
- **Styling:** Tailwind CSS 4 with custom design tokens
- **Fonts:** Inter (sans), Old Standard TT (serif), IBM Plex Mono (monospace)
- **Utilities:** clsx + tailwind-merge (via `cn()` helper)

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── layout.tsx    # Root layout with font configuration
│   ├── page.tsx      # Homepage (design system showcase)
│   └── globals.css   # Global styles and Tailwind imports
├── components/
│   ├── sections/     # Page sections (Header, Philosophy, Typography, etc.)
│   └── ui/           # Reusable UI components (Button, Card, Input, etc.)
└── lib/
    └── cn.ts         # Class name utility (clsx + twMerge)
```

## Commands

- **Dev server:** `npm run dev` (runs on http://localhost:3000)
- **Build:** `npm run build`
- **Production server:** `npm start`
- **Lint:** `npm run lint`
- **Format:** `npx prettier --write .` (Prettier 3.7.4 installed)

## Design System Philosophy

**Read `ARDENT_DESIGN.md` before making any design or component changes.** This document defines the
complete design philosophy and is the source of truth for:

- Typography system (3 font families: sans, serif, mono)
- Color palette (harsh black/white base + semantic accent colors)
- Spacing scale (tight, compact rhythm)
- Border philosophy (hairline borders, no shadows, minimal radius)
- Density principles (when to be sparse vs. dense)
- Component patterns

### Key Design Principles

1. **Intentionality over style** — every decision requires a reason
2. **Transparency** — expose state, show the system
3. **Timelessness** — ignore trends, design for permanence
4. **Precision** — engineered, not decorated
5. **Functional density** — as complex as needed, no more, no less
6. **Warmth through craft** — care visible in details
7. **Performance is design** — fast, lightweight, no bloat
8. **Respect for users** — don't infantilize

### Typography Usage

- **Sans-serif (Inter):** Headings (H1-H4), display type, UI elements
- **Serif (Old Standard TT):** Body copy, paragraphs, extended reading
- **Monospace (IBM Plex Mono):** Labels, captions, metadata, code, system info

### Color Usage

- **Base:** Harsh white (`#FFFFFF`) and harsh black (`#000000`) for maximum contrast
- **Emerald (`#009148`):** Success, confirmation, positive actions
- **Goldenrod (`#FDB515`):** Warnings, cautions, attention states
- **Ocean (`#0060BF`):** Links, informational states, secondary actions
- **Red (`#DC2626`):** Errors, destructive actions, critical alerts

Color is **semantic only**—never decorative.

### Component Patterns

- **Flat surfaces:** No box-shadows for elevation
- **Hairline borders:** 1px borders (`border-hairline`)
- **Minimal radius:** Generally `rounded-none`, maximum `rounded-sm` (2px) for inputs
- **Tight spacing:** Uses custom Tailwind spacing scale (see `tailwind.config.ts`)

## Development Guidelines

### Adding New Components

1. Place in `src/components/ui/` for reusable UI primitives
2. Use the `cn()` utility from `@/lib/cn` for className merging
3. Follow existing component patterns (see `Button.tsx`, `Card.tsx`, `Input.tsx`)
4. Apply Ardent Design tokens from `tailwind.config.ts`
5. No shadows, minimal border-radius, semantic color usage only

### Typography Classes

Use Tailwind's font family utilities configured in `tailwind.config.ts`:

- `font-sans` — headings and UI elements
- `font-serif` — body text
- `font-mono` — labels, captions, metadata

### Path Aliases

TypeScript path alias `@/*` maps to `./src/*` (configured in `tsconfig.json`)

## Important Files

- `ARDENT_DESIGN.md` — complete design system philosophy and token specification
- `tailwind.config.ts` — design tokens (colors, typography, spacing) implemented in Tailwind
- `src/app/layout.tsx` — font loading and global layout structure
- `src/lib/cn.ts` — className utility for component styling
