# Ardent Design Showcase — Claude Code Prompt

## Critical: Read First

You are building a showcase for **Ardent Design**, a brutalist-influenced design system inspired by U.S. Graphics Company, IBM Carbon, and technical documentation aesthetics.

**Before writing ANY code**, read these files in the project directory:
- `ARDENT_DESIGN.md` — Philosophy and principles
- `tokens.json` — Token specification

**This is NOT a generic Tailwind site.** If your output looks like a typical startup landing page, you have failed. Study the reference aesthetic below.

---

## Reference Aesthetic

Think: 1970s NASA control panels. Bell Labs technical papers. IBM Selectric documentation. Machine-readable typefaces. Dense, explicit, systematic.

**Visual characteristics:**
- Hairline rules dividing sections (not whitespace alone)
- Monospace text for ALL labels, metadata, percentages
- Serif body text (not sans-serif)
- Uppercase monospace section labels with letter-spacing
- Dense information display — screens can hold multiple ideas
- No rounded corners anywhere
- No shadows anywhere
- No gradients anywhere
- Color only for semantic meaning (accent, error), never decoration

**If you find yourself adding `rounded-lg`, `shadow-md`, or `bg-gradient-*`, stop. You are off track.**

---

## Technical Stack

- Next.js 14+ (App Router)
- TypeScript (strict)
- Tailwind CSS
- No component libraries (no shadcn, no Radix, no Headless UI)

---

## File Structure

```
/app
  page.tsx
  layout.tsx
  globals.css

/components
  /ui
    Button.tsx
    Card.tsx
    Divider.tsx
    Label.tsx
  /sections
    Header.tsx
    Philosophy.tsx
    Influences.tsx
    Typography.tsx
    Colors.tsx
    Components.tsx
    Footer.tsx

/lib
  tokens.ts
  cn.ts

tailwind.config.ts
```

---

## Tailwind Configuration

Extend Tailwind with these exact values from `tokens.json`:

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#1A1A1A",
          950: "#0F0F0F",
        },
        emerald: {
          400: "#34D399",
          500: "#10A860",
          600: "#0D9B58",
        },
        red: {
          500: "#DC2626",
          600: "#B91C1C",
        },
      },
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["Domine", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "Consolas", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.625" }],
        lg: ["1.125rem", { lineHeight: "1.5" }],
        xl: ["1.25rem", { lineHeight: "1.375" }],
        "2xl": ["1.5rem", { lineHeight: "1.375" }],
        "3xl": ["1.875rem", { lineHeight: "1.25" }],
        "4xl": ["2.25rem", { lineHeight: "1.25" }],
      },
      letterSpacing: {
        tight: "-0.025em",
        wide: "0.05em",
        wider: "0.1em",
      },
      borderWidth: {
        hairline: "1px",
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Global CSS

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-gray-50 text-gray-900 font-serif antialiased;
  }
  
  .dark body {
    @apply bg-gray-950 text-gray-50;
  }
}
```

**Note:** Body text uses `font-serif` by default. This is intentional.

---

## Fonts

Use `next/font/google`:

```tsx
// app/layout.tsx
import { Inter, Domine, IBM_Plex_Mono } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

const domine = Domine({ 
  subsets: ["latin"], 
  variable: "--font-serif" 
});

const ibmPlexMono = IBM_Plex_Mono({ 
  weight: ["400", "500"],
  subsets: ["latin"], 
  variable: "--font-mono" 
});
```

Apply all three variables to `<html>` className.

---

## Page Layout — Exact Specification

The page is a single vertical scroll. Max-width 72rem, centered. Horizontal padding: 1.5rem mobile, 4rem desktop.

### Section 1: Header

```
┌─────────────────────────────────────────────────────────────────┐
│ [DARK] button, top-right, monospace, small, hairline border     │
│                                                                 │
│ Ardent Design                          ← 4xl, font-sans, bold   │
│ A design system for precision,         ← base, font-serif       │
│ intention, and timelessness.                                    │
│                                                                 │
│ v0.1.0                                 ← xs, font-mono, gray-400│
│─────────────────────────────────────────────────────────────────│ ← hairline
└─────────────────────────────────────────────────────────────────┘
```

The dark mode toggle is a small button with text "DARK" or "LIGHT", monospace, uppercase, hairline border, top-right corner, position fixed or absolute.

### Section 2: Philosophy

```
┌─────────────────────────────────────────────────────────────────┐
│ PHILOSOPHY                             ← xs, mono, uppercase,   │
│                                          tracking-wider, gray-500│
│─────────────────────────────────────────────────────────────────│ ← hairline
│                                                                 │
│ Intentionality over style              ← sm, font-sans, bold    │
│ Every design decision requires a reason.  ← sm, font-serif      │
│                                                                 │
│ Transparency                           ← sm, font-sans, bold    │
│ Expose state. Show the system.         ← sm, font-serif         │
│                                                                 │
│ Timelessness                           ← sm, font-sans, bold    │
│ Ignore trends. Design for permanence.  ← sm, font-serif         │
│                                                                 │
│ [... continue for all 8 tenets ...]                             │
│                                                                 │
│─────────────────────────────────────────────────────────────────│ ← hairline
└─────────────────────────────────────────────────────────────────┘
```

Each tenet: bold sans-serif title on its own line, then serif description below. Stack vertically with consistent spacing (space-3 between pairs, space-6 between tenets).

### Section 3: Influences

```
┌─────────────────────────────────────────────────────────────────┐
│ INFLUENCES                             ← xs, mono, uppercase    │
│─────────────────────────────────────────────────────────────────│
│                                                                 │
│ ┌───────────────────┬───────────────────┬───────────────────┐   │
│ │ U.S. Graphics Co. │ IBM Carbon        │ Recursive         │   │
│ │                   │                   │                   │   │
│ │ 50%               │ 30%               │ 20%               │   │ ← mono
│ │                   │                   │                   │   │
│ │ Control panels,   │ Systematic rigor, │ Warmth within     │   │ ← serif
│ │ technical docs,   │ modular           │ structure.        │   │
│ │ dense and         │ components,       │ Humanity in       │   │
│ │ explicit.         │ accessibility.    │ monospace.        │   │
│ └───────────────────┴───────────────────┴───────────────────┘   │
│                                                                 │
│─────────────────────────────────────────────────────────────────│
└─────────────────────────────────────────────────────────────────┘
```

Three columns, equal width. Each is a Card component with:
- Title: font-sans, bold
- Percentage: font-mono, gray-500
- Description: font-serif, small

Columns share borders (use CSS grid with gap-0 and border-collapse effect, or adjacent borders).

### Section 4: Typography

```
┌─────────────────────────────────────────────────────────────────┐
│ TYPOGRAPHY                             ← xs, mono, uppercase    │
│─────────────────────────────────────────────────────────────────│
│                                                                 │
│ Display                                ← actual 4xl rendering   │
│ Heading 1                              ← actual 3xl rendering   │
│ Heading 2                              ← actual 2xl rendering   │
│ Heading 3                              ← actual xl rendering    │
│ Heading 4                              ← actual lg rendering    │
│                                                                 │
│─────────────────────────────────────────────────────────────────│ ← hairline divider
│                                                                 │
│ Body text is set in a serif typeface   ← actual serif body      │
│ for comfortable extended reading. The                           │
│ letterforms carry editorial weight,                             │
│ like technical papers or quality                                │
│ documentation.                                                  │
│                                                                 │
│─────────────────────────────────────────────────────────────────│
│                                                                 │
│ LABEL        CODE         Caption      metadata                 │
│ ↑ mono,xs    ↑ mono,sm    ↑ mono,xs    ↑ mono,xs,gray-400       │
│   uppercase    regular      regular      tight                  │
│   tracking-wider                                                │
│                                                                 │
│─────────────────────────────────────────────────────────────────│
└─────────────────────────────────────────────────────────────────┘
```

Show live rendered specimens. Label each with monospace metadata showing the role.

### Section 5: Colors

```
┌─────────────────────────────────────────────────────────────────┐
│ COLORS                                 ← xs, mono, uppercase    │
│─────────────────────────────────────────────────────────────────│
│                                                                 │
│ Gray                                   ← sm, sans, bold         │
│ ┌────┬────┬────┬────┬────┬────┬────┬────┬────┬────┐             │
│ │ 50 │100 │200 │300 │400 │500 │600 │700 │800 │900 │             │
│ └────┴────┴────┴────┴────┴────┴────┴────┴────┴────┘             │
│   Each swatch: 48x48, color fill, hairline border               │
│   Below each: hex value in mono xs                              │
│                                                                 │
│ Emerald                                ← sm, sans, bold         │
│ ┌────┬────┬────┐                                                │
│ │400 │500 │600 │                                                │
│ └────┴────┴────┘                                                │
│                                                                 │
│ Red                                    ← sm, sans, bold         │
│ ┌────┬────┐                                                     │
│ │500 │600 │                                                     │
│ └────┴────┘                                                     │
│                                                                 │
│─────────────────────────────────────────────────────────────────│
└─────────────────────────────────────────────────────────────────┘
```

Swatches are squares, not rounded. Hairline border on each (important for light colors). Hex values below in monospace.

### Section 6: Components

```
┌─────────────────────────────────────────────────────────────────┐
│ COMPONENTS                             ← xs, mono, uppercase    │
│─────────────────────────────────────────────────────────────────│
│                                                                 │
│ Buttons                                ← sm, sans, bold         │
│                                                                 │
│ ┌──────────┐  ┌──────────┐  ┌──────────┐                        │
│ │ Primary  │  │ Secondary│  │  Ghost   │                        │
│ └──────────┘  └──────────┘  └──────────┘                        │
│   ↑ solid       ↑ outlined    ↑ text only                       │
│   dark bg       hairline      no border                         │
│                                                                 │
│─────────────────────────────────────────────────────────────────│
│                                                                 │
│ Card                                   ← sm, sans, bold         │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Card Title                           ← sans, bold           │ │
│ │                                                             │ │
│ │ Card content in serif. This is body text demonstrating     │ │
│ │ how a card contains information.                           │ │
│ │                                                             │ │
│ │ metadata · 2024-01-15                ← mono, xs, gray-500   │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│─────────────────────────────────────────────────────────────────│
│                                                                 │
│ Links                                  ← sm, sans, bold         │
│                                                                 │
│ Internal link →    External link ↗                              │
│ ↑ underline, hover = emerald                                    │
│                                                                 │
│─────────────────────────────────────────────────────────────────│
│                                                                 │
│ Dividers                               ← sm, sans, bold         │
│                                                                 │
│ Default ─────────────────────────────── (gray-200)              │
│ Strong  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ (gray-900)              │
│                                                                 │
│─────────────────────────────────────────────────────────────────│
│                                                                 │
│ Input                                  ← sm, sans, bold         │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Placeholder text                                            │ │
│ └─────────────────────────────────────────────────────────────┘ │
│   ↑ hairline border, 2px radius ONLY for inputs                 │
│                                                                 │
│─────────────────────────────────────────────────────────────────│
└─────────────────────────────────────────────────────────────────┘
```

### Section 7: Footer

```
┌─────────────────────────────────────────────────────────────────┐
│─────────────────────────────────────────────────────────────────│ ← hairline
│                                                                 │
│ Built with intention.                  ← serif, italic          │
│                                                                 │
│ Repository ↗                           ← link                   │
│                                                                 │
│ 2024                                   ← mono, xs, gray-500     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Component Specifications

### Button

```tsx
// components/ui/Button.tsx

interface ButtonProps {
  variant: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  onClick?: () => void;
}

// Styles:
// ALL variants: font-mono, text-sm, uppercase, tracking-wide
// ALL variants: px-4 py-2, no border-radius (rounded-none)
// ALL variants: transition-colors duration-150

// primary:  bg-gray-900 text-gray-50 
//           hover:bg-gray-800
//           dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200

// secondary: bg-transparent border border-gray-200 text-gray-900
//            hover:bg-gray-100
//            dark:border-gray-800 dark:text-gray-50 dark:hover:bg-gray-900

// ghost:    bg-transparent text-gray-900
//           hover:bg-gray-100
//           dark:text-gray-50 dark:hover:bg-gray-900
```

### Card

```tsx
// components/ui/Card.tsx

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// Styles:
// bg-white dark:bg-gray-900
// border border-gray-200 dark:border-gray-800
// p-6
// NO rounded classes
// NO shadow classes
```

### Divider

```tsx
// components/ui/Divider.tsx

interface DividerProps {
  variant?: "default" | "strong";
}

// Styles:
// w-full border-t
// default: border-gray-200 dark:border-gray-800
// strong:  border-gray-900 dark:border-gray-50
```

### Label

```tsx
// components/ui/Label.tsx

// For section headers like "PHILOSOPHY", "INFLUENCES", etc.

interface LabelProps {
  children: React.ReactNode;
}

// Styles:
// font-mono text-xs uppercase tracking-wider text-gray-500
```

---

## Absolute Rules

1. **No rounded corners** except `rounded-sm` (2px) on inputs only.

2. **No shadows.** Not even subtle ones. Remove any shadow classes.

3. **No gradients.** Solid colors only.

4. **Body text is serif.** If you see paragraphs in sans-serif, fix it.

5. **Labels are monospace, uppercase, tracked.** Section headers like "PHILOSOPHY" follow this pattern.

6. **Percentages and metadata are monospace.** "50%", "v0.1.0", dates, etc.

7. **Hairline borders only.** Use `border` (1px), never `border-2` or thicker for UI elements.

8. **Dividers between ALL sections.** Horizontal rules separate content areas.

9. **Dark mode toggle** is a simple text button, not an icon. Text reads "DARK" or "LIGHT".

10. **Dense vertical rhythm.** Sections are separated by `py-12` or similar, not huge gaps.

---

## Validation Checklist

Before considering the work complete, verify:

- [ ] Body text uses serif font (Domine)
- [ ] Section labels are mono, uppercase, tracked (e.g., "TYPOGRAPHY")
- [ ] All metadata/percentages are monospace
- [ ] No rounded corners except inputs (2px max)
- [ ] No shadows anywhere
- [ ] No gradients anywhere
- [ ] Hairline borders on cards
- [ ] Dividers between all sections
- [ ] Dark mode toggle works and is text-based
- [ ] Influence cards are in a 3-column grid with shared borders
- [ ] Color swatches are square, not rounded
- [ ] The page looks like technical documentation, not a startup landing page

---

## Deliverable

A complete Next.js application that:

- Runs with `npm run dev`
- Builds with `npm run build`
- Embodies Ardent Design through its own implementation

The showcase must itself be proof that the system works.

---

*If it looks like every other Tailwind site, start over.*
