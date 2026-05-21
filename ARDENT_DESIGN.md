# Ardent Design

A personal design system by Dhison Padma.

**Version 0.1.3**

---

## Overview

Ardent Design is a design philosophy and token system for building digital interfaces that are
precise, intentional, and timeless. It prioritizes clarity over decoration, density over sparsity
(when appropriate), and transparency over abstraction.

The name "Ardent" reflects the system's character: intense, passionate, and burning—but controlled.
Every decision is deliberate. Every element earns its place.

This document is the philosophical foundation. The token specification lives in `tokens.json`
(source of truth). Operational directives for AI agents live in `AGENTS.md`.

Ardent targets three surfaces: web, TUI, and GUI. The same vocabulary applies on each — see the
_Cross-Surface Notes_ section below.

---

## Core Principle

**Intentionality over style.**

Ardent Design is neither minimalist nor maximalist. It is _intentional_. Sparse when focus is
required. Dense when information rewards exploration. The context determines the approach; the sin
is arbitrariness.

A portfolio landing page may be quiet and restrained—a doorway. A dashboard or technical
documentation may be dense and layered—a workbench. Both are correct if the decision is conscious.

---

## Philosophy Tenets

There are eight tenets, in a defined order. When forces conflict, apply them in order:
**intentionality** trumps everything; **respect-for-users** is the floor.

The same ordering is machine-readable as `philosophy.tenetOrder` in `tokens.json`.

### 1. Intentionality Over Style

Every design decision requires a reason. Aesthetic choices are not arbitrary preferences but
functional responses to context. If you cannot articulate why an element exists or why it looks the
way it does, reconsider it.

### 2. Transparency

Expose state. Show the system. Don't hide the machine.

Users benefit from understanding what is happening, why, and how. Interfaces should reveal their
inner workings rather than obscuring them behind abstraction. This builds trust and enables mastery.

### 3. Timelessness

Ignore trends. Design for permanence.

If a design would look wrong printed in 1978 or displayed in 2045, reconsider it. Avoid transient
stylistic markers: excessive gradients, shadows-as-decoration, rounded corners as personality
substitute, animations without purpose.

### 4. Precision

Engineered, not decorated.

Every element should feel _built_—considered, calibrated, placed with intention. This is the
aesthetic of control panels, technical documentation, and datasheets. Functional beauty derived from
rigor.

### 5. Functional Density

As complex as it needs to be. No more, no less.

Information is not the enemy. A screen can hold more than one idea. Whitespace is structural—it
creates rhythm and hierarchy—but emptiness for its own sake is waste. Diametrically opposite of
minimalism when the content demands it.

### 6. Warmth Through Craft

The human is visible in the details.

Precision does not mean cold. The care invested in typography, spacing, alignment, and
micro-interactions communicates that a person made this and gave a damn. Warmth emerges from craft,
not from whimsy or decoration.

### 7. Performance Is Design

Fast, lightweight, no bloat.

The experience of speed is part of the aesthetic. A slow interface cannot be beautiful. Performance
is not an implementation detail—it is a design decision.

### 8. Respect for Users

Don't infantilize.

Assume users are capable adults. Be direct, clear, and explicit. Avoid condescending "friendly"
language, unnecessary confirmation dialogs, and hiding functionality behind progressive disclosure
when upfront presentation would serve better.

---

## Influences

Ardent Design synthesizes three primary influences in approximate proportion:

### U.S. Graphics Company (50%)

The dominant influence. USG represents the aesthetic of the golden era of computing—control panels,
machine-readable typefaces, terminal interfaces, technical documentation. Key inheritances:

- Monospace typography for labels, metadata, and system elements
- Hairline borders and ruled dividers
- High contrast (near-black on off-white)
- Dense information display
- Flat, non-hierarchical surfaces (no shadows for depth simulation)
- Color used semantically, never decoratively

USG's philosophical positions adopted by Ardent:

- Emergent over prescribed aesthetics
- Expose state and inner workings
- Dense, not sparse
- Explicit is better than implicit
- Regiment functionalism
- Performance is design
- Verbosity over opacity
- Ignore design trends
- Driven by objective reasoning and common sense
- Don't infantilize users

### IBM Carbon Design System (30%)

Carbon provides systematic rigor. Where USG is an aesthetic, Carbon is an architecture. Key
inheritances:

- Consistent spacing scale and grid system
- Modular, composable component structure
- Accessibility standards and patterns
- Semantic token structure (primitives → semantics → components)
- Professional-grade documentation practices

### Recursive Typeface / Light Brutalism (20%) — philosophical only

Recursive's influence is philosophical, not typographic. Its variable axes demonstrate that
systematic design can still breathe; that is the lesson Ardent adopts. Recursive itself is **not**
in the type stack — Ardent's sans is Inter. Key inheritances:

- Humanity within structure
- Playfulness that doesn't sacrifice function
- "Ready for work, ready for play" duality
- The soft end of brutalism — structural but approachable

---

## Rejections

Ardent Design explicitly rejects:

### Material Design and Its Descendants

Rounded corners as personality substitute. Animation as distraction. Bouncy, infantilizing UI that
assumes user fragility. Soulless and generic.

Examples: Venmo, Yelp, Discord, stock Android.

### Shadows for Depth Simulation

Flat surfaces. No fake elevation. If hierarchy is needed, achieve it through spacing, scale, weight,
or border treatment—not drop shadows pretending to be z-index.

### Decorative Color

Color is semantic. It means something: action, state, error, accent. It is never wallpaper.

### Animation Without Purpose

Motion must communicate—a state change, a transition, feedback. Never decoration, never delay, never
spectacle. The token system canonicalizes this: `motion.duration.* = 0ms`,
`motion.easing.* = linear`. "No animation" is a value, not an implication.

### Hiding Complexity

Don't abstract away the system to "protect" users. Expose controls. Show options. Trust capability.

---

## Typography

Ardent Design uses a three-family type system, each with a strict semantic role. They never trade
places.

### Sans-Serif: Headings, UI, Display

**Stack:** Inter → Helvetica Neue → Arial → sans-serif

Used for content headings (H1–H4), display type, structural hierarchy, buttons (medium weight),
input fields, and interactive elements. Clean, rational, and engineered. Bold weight for all heading
levels.

### Serif: Body Text

**Stack:** Old Standard TT → Source Serif → Domine → Times New Roman → serif

Used for body copy, paragraphs, and extended reading. Serif body text provides a timeless, editorial
quality—like reading a Bell Labs technical paper or a Whole Earth Catalog article. Tight line-height
(1.4) for dense, compact reading.

### Monospace: Labels, Metadata, System Elements

**Stack:** IBM Plex Mono → Geist Mono → Fira Code → Berkeley Mono → monospace

Used for labels, section dividers, captions, metadata, timestamps, code, and system information. The
monospace family signals "data" and "system" — it distinguishes functional text from content. Wider
letter-spacing on labels (uppercase, xs). Creates a machine-readable, control-panel aesthetic for
metadata-level information.

### Type Scale

Twelve sans sizes are available (`fontSize.xs` through `fontSize.9xl`). The `display` type is split
into a normal `display` (6xl, 60px) and `displayLg` (8xl, 96px) so cover-grade type does not share
the body scale.

### Typography Tokens

| Role      | Family | Size          | Weight | Line Height | Letter Spacing |
| --------- | ------ | ------------- | ------ | ----------- | -------------- |
| displayLg | Sans   | 8xl · 6rem    | 700    | 1.0         | −0.05em        |
| display   | Sans   | 6xl · 3.75rem | 700    | 1.1         | −0.025em       |
| heading1  | Sans   | 4xl · 2.25rem | 700    | 1.1         | −0.025em       |
| heading2  | Sans   | 2xl · 1.5rem  | 700    | 1.25        | 0              |
| heading3  | Sans   | xl · 1.25rem  | 700    | 1.25        | 0              |
| heading4  | Sans   | lg · 1.125rem | 700    | 1.4         | 0              |
| body      | Serif  | base · 1rem   | 400    | 1.4         | 0              |
| bodyLarge | Serif  | lg · 1.125rem | 400    | 1.5         | 0              |
| bodySmall | Serif  | sm · 0.875rem | 400    | 1.4         | 0              |
| label     | Mono   | xs · 0.75rem  | 500    | 1.4         | 0.05em (UC)    |
| code      | Mono   | sm · 0.875rem | 400    | 1.4         | 0              |
| caption   | Mono   | xs · 0.75rem  | 400    | 1.4         | 0.025em        |
| metadata  | Mono   | xs · 0.75rem  | 400    | 1.2         | 0              |

---

## Color

### Philosophy

Harsh, punchy, high-contrast monochrome foundation with semantic accent colors. Color is never
decorative—it always signifies something. Maximum contrast for maximum impact.

### Palette

**Base:** Harsh white and harsh black for primary surfaces.

- Light mode primary background: `#FFFFFF` (white)
- Light mode secondary background: `#FAFAFA` (gray.50)
- Light mode text: `#000000` (black)
- Dark mode primary background: `#000000` (black)
- Dark mode secondary background: `#050505` (gray.950)
- Dark mode text: `#FFFFFF` (white)

**Accent Colors** (four; no others):

| Color     | Primary | Hex       | Usage                                          |
| --------- | ------- | --------- | ---------------------------------------------- |
| Emerald   | 400     | `#26AB62` | Success, confirmation, positive actions        |
| Goldenrod | 500     | `#FDB515` | Warnings, cautions, attention-required states  |
| Ocean     | 500     | `#0060BF` | Links, informational states, secondary actions |
| Red       | 500     | `#DC2626` | Errors, destructive actions, critical alerts   |

Each accent (and gray) carries a full **50–900 scale** for subtle backgrounds, hover states, and
text variations. The "primary" step is the canonical signal — emerald is 400 (the buttons use it
directly), the rest are 500.

### Color Tokens — Light Mode

| Token          | Resolves to         | Usage                          |
| -------------- | ------------------- | ------------------------------ |
| bg.primary     | white               | Page background (harsh)        |
| bg.secondary   | gray.50             | Card / panel background        |
| bg.tertiary    | gray.100            | Hover, subtle fills, surround  |
| bg.inverse     | black               | Inverted surfaces, terminals   |
| bg.accent      | emerald.500         | Success states                 |
| bg.warning     | goldenrod.50        | Warning containers             |
| bg.info        | ocean.50            | Informational callouts         |
| bg.error       | red.50              | Error containers               |
| text.primary   | black               | Body, headings, primary ink    |
| text.secondary | gray.600            | Labels, metadata, captions     |
| text.muted     | gray.400            | Disabled, placeholder, hint    |
| text.accent    | emerald.600         | Success text on light bg       |
| text.warning   | goldenrod.700       | Warning text on light bg       |
| text.info      | ocean.600           | Informational text             |
| text.link      | ocean.600           | Link text                      |
| text.error     | red.600             | Error text on light bg         |
| border.default | black · 1px         | Standard borders (composite)   |
| border.strong  | black · 2px         | Emphasized borders (composite) |
| border.muted   | gray.200 · 1px      | Subtle dividers (composite)    |
| border.accent  | emerald.500 · 1px   | Accent borders                 |
| border.warning | goldenrod.500 · 1px | Warning borders                |
| border.info    | ocean.500 · 1px     | Info borders                   |
| border.error   | red.500 · 1px       | Error borders                  |
| border.focus   | black · 2px         | Focus ring                     |

**Border tokens are composite** — each binds `color` AND `width`. Consumers pick one token, not two.
Dark mode inverts appropriately; see `tokens.json` for the full mapping.

---

## Spacing

### Philosophy

Tight, consistent rhythm creates density without chaos. Ardent uses a 4px base unit with a monotonic
scale — **step number tracks size; there are no synonyms**.

### Scale

```
space.0    →  0
space.px   →  1px
space.0.5  →  0.125rem  (2px)
space.1    →  0.25rem   (4px)
space.1.5  →  0.375rem  (6px)
space.2    →  0.5rem    (8px)
space.2.5  →  0.625rem  (10px)
space.3    →  0.75rem   (12px)
space.3.5  →  0.875rem  (14px)
space.4    →  1rem      (16px)
space.5    →  1.25rem   (20px)
space.6    →  1.5rem    (24px)
space.7    →  1.75rem   (28px)
space.8    →  2rem      (32px)
space.9    →  2.25rem   (36px)
space.10   →  2.5rem    (40px)
space.11   →  2.75rem   (44px)
space.12   →  3rem      (48px)
space.14   →  3.5rem    (56px)
space.16   →  4rem      (64px)
space.20   →  5rem      (80px)
space.24   →  6rem      (96px)
space.28   →  7rem      (112px)
space.32   →  8rem      (128px)
```

### Semantic Spacing

| Context               | Token                    | Value     |
| --------------------- | ------------------------ | --------- |
| Page margin (mobile)  | spacing.page.margin      | 1.25rem   |
| Page margin (desktop) | spacing.page.marginLg    | 3rem      |
| Page max-width        | spacing.page.maxWidth    | 42.375rem |
| Page max-width (doc)  | spacing.page.maxWidthDoc | 47.5rem   |
| Section gap           | spacing.section.gap      | 3.5rem    |
| Section gap (small)   | spacing.section.gapSm    | 2rem      |
| Section gap (xs)      | spacing.section.gapXs    | 1.5rem    |
| Card padding          | spacing.card.padding     | 1.25rem   |
| Card padding (small)  | spacing.card.paddingSm   | 0.75rem   |
| Card padding (large)  | spacing.card.paddingLg   | 1.5rem    |
| Card internal gap     | spacing.card.gap         | 0.75rem   |
| Inline gap            | spacing.inline.gap       | 0.375rem  |
| Inline gap (medium)   | spacing.inline.gapMd     | 0.5rem    |
| Inline gap (large)    | spacing.inline.gapLg     | 0.75rem   |
| Control padding (X)   | spacing.control.paddingX | 0.75rem   |
| Control padding (Y)   | spacing.control.paddingY | 0.375rem  |

---

## Borders, Surfaces, Radius, Motion

### Borders

Flat surfaces. No shadows. Borders are structural — they delineate, they don't decorate.

| Token                | Value |
| -------------------- | ----- |
| borderWidth.0        | 0     |
| borderWidth.hairline | 1px   |
| borderWidth.default  | 2px   |
| borderWidth.thick    | 4px   |

### Border Radius

Ardent rejects rounded corners. Only `borderRadius.none` (`0`) exists as a primitive. Components
reference it explicitly so the rejection is enforced at the token level, not merely conventional.

### Motion

Ardent rejects animation-without-purpose. The token system canonicalizes the absence:

| Token                   | Value  |
| ----------------------- | ------ |
| motion.duration.instant | 0ms    |
| motion.duration.fast    | 0ms    |
| motion.duration.normal  | 0ms    |
| motion.easing.\*        | linear |

"No animation" is a token value, not an implication.

### Focus

Every interactive element resolves the same focus ring.

| Token        | Value    |
| ------------ | -------- |
| focus.color  | black    |
| focus.width  | 2px      |
| focus.offset | 0.125rem |
| focus.style  | solid    |

### Component Border Defaults

- **Cards:** Hairline border, no radius, no shadow
- **Buttons:** Hairline border, no radius
- **Inputs:** Hairline border, no radius
- **Dividers:** Hairline (default) or 2px (strong), full-width rules

---

## Layout Patterns

### Default Page Container (Document Style)

Unless otherwise specified, pages should use a centered document-style container pattern that adapts
between mobile and desktop:

**Desktop (sm breakpoint and above):**

- Content wrapped in a centered container with `max-width: 42.375rem` (`678px`)
- Body has vertical padding (increases with viewport: sm:py-6, md:py-9, lg:py-12)
- Gray background (`gray.100`) outside the content area
- White background for the content container
- Top and bottom borders only (hairline black borders)
- Creates a "document on a desk" or "report card" aesthetic

**Mobile (below sm breakpoint):**

- Full-width container (no max-width constraint)
- No vertical padding on body
- White background
- Top and bottom borders only
- Full-bleed reading experience

This pattern emphasizes the document-like quality of content while maintaining optimal reading width
on larger screens. The mobile version ignores the container to maximize screen real estate.

### Spec-Grade Document Container

Reference material — spec sheets, changelogs, color references, this document — may widen to
`spacing.page.maxWidthDoc` (`47.5rem` / `760px`) so token tables and color scales fit without
choking. This is a **documented exception**, not free reign.

**Implementation:**

```tsx
// Reading container (default)
<body className="min-h-screen flex justify-center bg-gray-100 sm:py-6 md:py-9 lg:py-12">
  <div className="w-full max-w-[678px] min-h-full bg-white border-y border-gray-900">
    {children}
  </div>
</body>

// Spec-grade container
<body className="min-h-screen flex justify-center bg-gray-100 sm:py-6 md:py-9 lg:py-12">
  <div className="w-full max-w-[760px] min-h-full bg-white border-y border-gray-900">
    {children}
  </div>
</body>
```

Content within either container should use horizontal padding (e.g., `px-3 md:px-5`) to ensure
proper margins on all screen sizes.

---

## Components

### Cards

Cards are containers with harsh black hairline borders on `gray.50` (light) or `gray.950` (dark)
backgrounds. No shadows. No rounded corners. Compact internal padding (1.25rem). Tight internal gap
(0.75rem) between elements.

### Buttons

Three variants. All buttons share: no border-radius, sans-serif font (medium weight), uppercase with
wider tracking (`0.05em`), padding `0.375rem 0.75rem` (i.e. `px-3 py-1.5`), no animations.

- **Primary:** Bright `emerald.400` (`#26AB62`) background, black text, black border. Hover:
  `emerald.500` (`#009148`) background with matching border, white text.
- **Secondary:** Transparent background, `goldenrod.500` (`#FDB515`) border, `gray.900` text. Hover:
  `goldenrod.500` background with white text.
- **Ghost:** Transparent background, transparent border, `gray.900` text. Hover: `gray.100`
  background.

### Links

Default state: ocean blue (`text.link`), underlined. Hover state: neutral (`gray.600`), underlined.

Use arrow indicators for external links (↗) and navigation (→).

### Inputs

Hairline `gray.900` border, no radius. Sans-serif label above (uppercase mono `xs`). Padding
`0.375rem 0.625rem`. Focus: border changes to pure black.

### Dividers

Hairline rules. Default dividers use pure black (harsh, maximum contrast). Can be made thicker with
the strong variant (black, 2px), or quieter with the muted variant (`gray.200`, 1px).

### Labels (Section Dividers)

Uppercase monospace text used to mark section boundaries and categories. Appearance: `xs` size,
`medium` weight, `wider` letter-spacing, `gray.600` color in light mode. Often paired with a
hairline divider below.

**Usage pattern:**

```tsx
<Label>SECTION NAME</Label>
<Divider />
```

This creates a clear visual break between content sections while maintaining the system's
machine-readable aesthetic. Labels are metadata-level indicators, not content headings.

---

## Density and Whitespace

### When to Be Sparse

- Landing pages, portfolios, marketing sites
- Onboarding flows
- Single-focus tasks
- When the goal is orientation, not exploration

### When to Be Dense

- Dashboards and data displays
- Technical documentation
- Reference materials
- Admin interfaces
- When users need to scan, compare, or find

### The Rule

Ask: "What does the user need here?" If they need focus, create space. If they need information,
provide density. Never sparse for aesthetic purity. Never dense for visual impressiveness.

---

## Cross-Surface Notes

Ardent targets web, TUI, and GUI. The same vocabulary applies on each. See the `surfaces` block in
`tokens.json` for the full mapping.

### Web

CSS custom properties generated from `tokens.json`. Hairlines render as 1px solid borders; flat
surfaces, no shadow.

### TUI

ANSI escape codes. Terminal font (monospace) for everything by default — no family swap needed.
Accent colors map to standard ANSI palette:

| Semantic  | ANSI       | Notes                            |
| --------- | ---------- | -------------------------------- |
| primary   | 0 / 15     | Default fg/bg (terminal palette) |
| secondary | 8          | Bright black for muted labels    |
| accent    | 2 (green)  | Emerald                          |
| warning   | 3 (yellow) | Goldenrod                        |
| info      | 4 (blue)   | Ocean                            |
| error     | 1 (red)    | Red                              |

Hairlines render via box-drawing glyphs (`─ │ ┌ ┐ └ ┘`); strong borders use double glyphs
(`═ ║ ╔ ╗ ╚ ╝`). Metadata uses the ANSI dim attribute (`\u001b[2m`).

### GUI

Platform-native rendering (Qt / Cocoa / Win32 / GTK). Use the same hex values; respect the
platform's dark-mode toggle. Same three families; fall back to the platform's system mono if IBM
Plex Mono is not installed. 1px hairline at logical pixels. No platform-native rounded corners or
drop shadows.

---

## For AI Agents and Models

Operational directives for AI agents working in an Ardent project live in **`AGENTS.md`** at the
project root. That file is the working contract — Do / Don't / Judgment Calls — and references this
document and `tokens.json`.

This separation is intentional: `ARDENT_DESIGN.md` is philosophical, `AGENTS.md` is operational.

### File Reference

- `tokens.json` — token source of truth (color, type, spacing, borders, motion, focus, surfaces).
- `ARDENT_DESIGN.md` — this file; philosophical foundation.
- `AGENTS.md` — operational directives for AI agents.

---

## Summary

Ardent Design is:

- **Intentional** — every decision has a reason
- **Transparent** — the system is visible
- **Timeless** — immune to trends
- **Precise** — engineered, not decorated
- **Dense when needed** — information is not the enemy
- **Warm through craft** — care is visible in details
- **Fast** — performance is design
- **Respectful** — users are capable adults

Build with these principles and the system will cohere.

---

_Simple complexity. Ridding the spaces between aesthetics and function._
