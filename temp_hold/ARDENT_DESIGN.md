# Ardent Design

A personal design system by Dhison P.

Version 0.1.0

---

## Overview

Ardent Design is a design philosophy and token system for building digital interfaces that are precise, intentional, and timeless. It prioritizes clarity over decoration, density over sparsity (when appropriate), and transparency over abstraction.

The name "Ardent" reflects the system's character: intense, passionate, and burning—but controlled. Every decision is deliberate. Every element earns its place.

This document serves as the philosophical foundation for Ardent Design. It is intended for both human collaborators and AI agents assisting with design and development work.

---

## Core Principle

**Intentionality over style.**

Ardent Design is neither minimalist nor maximalist. It is *intentional*. Sparse when focus is required. Dense when information rewards exploration. The context determines the approach; the sin is arbitrariness.

A portfolio landing page may be quiet and restrained—a doorway. A dashboard or technical documentation may be dense and layered—a workbench. Both are correct if the decision is conscious.

---

## Philosophy Tenets

### 1. Intentionality Over Style

Every design decision requires a reason. Aesthetic choices are not arbitrary preferences but functional responses to context. If you cannot articulate why an element exists or why it looks the way it does, reconsider it.

### 2. Transparency

Expose state. Show the system. Don't hide the machine.

Users benefit from understanding what is happening, why, and how. Interfaces should reveal their inner workings rather than obscuring them behind abstraction. This builds trust and enables mastery.

### 3. Timelessness

Ignore trends. Design for permanence.

If a design would look wrong printed in 1978 or displayed in 2045, reconsider it. Avoid transient stylistic markers: excessive gradients, shadows-as-decoration, rounded corners as personality substitute, animations without purpose.

### 4. Precision

Engineered, not decorated.

Every element should feel *built*—considered, calibrated, placed with intention. This is the aesthetic of control panels, technical documentation, and datasheets. Functional beauty derived from rigor.

### 5. Functional Density

As complex as it needs to be. No more, no less.

Information is not the enemy. A screen can hold more than one idea. Whitespace is structural—it creates rhythm and hierarchy—but emptiness for its own sake is waste. Diametrically opposite of minimalism when the content demands it.

### 6. Warmth Through Craft

The human is visible in the details.

Precision does not mean cold. The care invested in typography, spacing, alignment, and micro-interactions communicates that a person made this and gave a damn. Warmth emerges from craft, not from whimsy or decoration.

### 7. Performance Is Design

Fast, lightweight, no bloat.

The experience of speed is part of the aesthetic. A slow interface cannot be beautiful. Performance is not an implementation detail—it is a design decision.

### 8. Respect for Users

Don't infantilize.

Assume users are capable adults. Be direct, clear, and explicit. Avoid condescending "friendly" language, unnecessary confirmation dialogs, and hiding functionality behind progressive disclosure when upfront presentation would serve better.

---

## Influences

Ardent Design synthesizes three primary influences in approximate proportion:

### U.S. Graphics Company (50%)

The dominant influence. USG represents the aesthetic of the golden era of computing—control panels, machine-readable typefaces, terminal interfaces, technical documentation. Key inheritances:

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

Carbon provides systematic rigor. Where USG is an aesthetic, Carbon is an architecture. Key inheritances:

- Consistent spacing scale and grid system
- Modular, composable component structure
- Accessibility standards and patterns
- Semantic token structure (primitives → semantics → components)
- Professional-grade documentation practices

### Recursive Typeface / Light Brutalism (20%)

Recursive represents warmth within structure. Its variable font axes (Casual, Weight, Slant) demonstrate that systematic design can still breathe. Key inheritances:

- Humanity within monospace
- Playfulness that doesn't sacrifice function
- "Ready for work, ready for play" duality
- The soft end of brutalism—structural but approachable

---

## Rejections

Ardent Design explicitly rejects:

### Material Design and Its Descendants

Rounded corners as personality substitute. Animation as distraction. Bouncy, infantilizing UI that assumes user fragility. Soulless and generic.

Examples: Venmo, Yelp, Discord, stock Android.

### Shadows for Depth Simulation

Flat surfaces. No fake elevation. If hierarchy is needed, achieve it through spacing, scale, weight, or border treatment—not drop shadows pretending to be z-index.

### Decorative Color

Color is semantic. It means something: action, state, error, accent. It is never wallpaper.

### Animation Without Purpose

Motion must communicate—a state change, a transition, feedback. Never decoration, never delay, never spectacle.

### Hiding Complexity

Don't abstract away the system to "protect" users. Expose controls. Show options. Trust capability.

---

## Typography

Ardent Design uses a three-family type system, each with distinct roles:

### Sans-Serif: Display and Headings

**Stack:** FK Grotesk → Untitled Sans → Inter → Helvetica Neue → Helvetica → Arial → sans-serif

Used for display type, headings (H1–H4), and UI elements requiring strong presence. Tight letter-spacing at large sizes. Clean, rational, engineered.

### Serif: Body Text

**Stack:** Charter → Domine → Palatino → Georgia → serif

Used for body copy, paragraphs, and extended reading. Serif body text provides a timeless, editorial quality—like reading a Bell Labs technical paper or a Whole Earth Catalog article. Relaxed line-height (1.625) for comfortable reading.

### Monospace: Labels, Code, Metadata

**Stack:** IBM Plex Mono → Geist Mono → CommitMono → Berkeley Mono → monospace

Used for labels, captions, metadata, timestamps, code, and system information. Wider letter-spacing on labels. The monospace family signals "data" and "system"—it distinguishes functional text from prose.

### Typography Tokens

| Role        | Family    | Size   | Weight   | Line Height | Letter Spacing |
|-------------|-----------|--------|----------|-------------|----------------|
| Display     | Sans      | 4xl    | Bold     | Tight       | Tight          |
| Heading 1   | Sans      | 3xl    | Bold     | Tight       | Tight          |
| Heading 2   | Sans      | 2xl    | Semibold | Snug        | Normal         |
| Heading 3   | Sans      | xl     | Semibold | Snug        | Normal         |
| Heading 4   | Sans      | lg     | Medium   | Normal      | Normal         |
| Body        | Serif     | base   | Regular  | Relaxed     | Normal         |
| Body Small  | Serif     | sm     | Regular  | Relaxed     | Normal         |
| Label       | Mono      | xs     | Medium   | Normal      | Wider          |
| Code        | Mono      | sm     | Regular  | Normal      | Normal         |
| Caption     | Mono      | xs     | Regular  | Normal      | Wide           |
| Metadata    | Mono      | xs     | Regular  | Tight       | Normal         |

---

## Color

### Philosophy

Monochrome foundation with one meaningful accent color. Color is never decorative—it always signifies something.

### Palette

**Base:** Near-black on off-white. Not pure #000000 or #FFFFFF.

- Light mode background: `#FAFAFA` (gray.50)
- Light mode text: `#1A1A1A` (gray.900)
- Dark mode background: `#0F0F0F` (gray.950)
- Dark mode text: `#FAFAFA` (gray.50)

**Accent:** Emerald green `#10A860`

Selected for equivalent intensity to USG's goldenrod yellow (`#E4A010`). Professional but alive. Used for:

- Interactive element hover states
- Active/selected states
- Links (on hover)
- Success indicators
- Intentional emphasis

**Error:** Red `#DC2626`

Used exclusively for error states and destructive actions.

### Color Tokens

Light mode semantic mappings:

| Token                  | Value         | Usage                        |
|------------------------|---------------|------------------------------|
| bg.primary             | gray.50       | Page background              |
| bg.secondary           | white         | Card/surface background      |
| bg.tertiary            | gray.100      | Hover states, subtle fills   |
| bg.inverse             | gray.900      | Inverted surfaces            |
| bg.accent              | emerald.500   | Accent backgrounds           |
| text.primary           | gray.900      | Primary text                 |
| text.secondary         | gray.600      | Secondary text               |
| text.muted             | gray.400      | Disabled, placeholder        |
| text.accent            | emerald.600   | Accent text                  |
| border.default         | gray.200      | Standard borders             |
| border.strong          | gray.900      | Emphasized borders           |

Dark mode inverts appropriately—see `tokens.json` for full mappings.

---

## Spacing

### Philosophy

Consistent rhythm creates coherence. Ardent uses a 4px base unit with a defined scale.

### Scale

```
0.25rem (4px)   → space.1
0.5rem  (8px)   → space.2
0.75rem (12px)  → space.3
1rem    (16px)  → space.4
1.5rem  (24px)  → space.6
2rem    (32px)  → space.8
3rem    (48px)  → space.12
4rem    (64px)  → space.16
```

### Semantic Spacing

| Context       | Token            | Value    |
|---------------|------------------|----------|
| Page margin   | spacing.page.margin    | 1.5rem   |
| Page margin (large) | spacing.page.marginLg | 4rem |
| Section gap   | spacing.section.gap    | 4rem     |
| Card padding  | spacing.card.padding   | 1.5rem   |
| Inline gap    | spacing.inline.gap     | 0.5rem   |

---

## Borders and Surfaces

### Philosophy

Flat surfaces. No shadows. Borders are structural—they delineate, they don't decorate.

### Border Tokens

| Token              | Value   |
|--------------------|---------|
| borderWidth.hairline | 1px   |
| borderWidth.default  | 2px   |
| borderRadius.none    | 0     |
| borderRadius.sm      | 2px   |

### Component Borders

- **Cards:** Hairline border, no radius, no shadow
- **Buttons:** Hairline border, no radius
- **Inputs:** Hairline border, minimal radius (2px) for usability
- **Dividers:** Hairline, full-width rules

---

## Components

### Cards

Cards are containers with hairline borders on white (light) or gray.900 (dark) backgrounds. No shadows. No rounded corners. Generous internal padding (1.5rem).

### Buttons

Three variants:

- **Primary:** Solid inverse background (dark on light, light on dark). No border.
- **Secondary:** Transparent background, hairline border.
- **Ghost:** Transparent background, no border. Subtle hover state.

All buttons: no border-radius.

### Links

Default state: primary text color, underlined.
Hover state: accent color, underlined.

Use arrow indicators for external links (↗) and navigation (→).

### Dividers

Hairline rules. Can be muted (gray.200) or strong (gray.900) depending on emphasis needed.

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

Ask: "What does the user need here?" If they need focus, create space. If they need information, provide density. Never sparse for aesthetic purity. Never dense for visual impressiveness.

---

## For AI Agents and Models

When assisting with Ardent Design projects, follow these directives:

### Do

- Use the token system. Reference `tokens.json` for all values.
- Prefer serif (Charter/Domine) for body text.
- Prefer monospace (IBM Plex Mono/Geist Mono) for labels, metadata, code.
- Prefer sans-serif (FK Grotesk/Inter) for headings.
- Use hairline (1px) borders.
- Use the emerald accent (`#10A860`) sparingly and semantically.
- Keep surfaces flat. No box-shadows for elevation.
- No border-radius on cards or buttons. Minimal (2px) on inputs only.
- Respect the spacing scale. Use defined tokens.
- When in doubt, be more direct, more explicit, more information-dense.

### Don't

- Don't add decorative elements.
- Don't use color for decoration—only for meaning.
- Don't add animations unless they communicate state change.
- Don't use rounded corners beyond the minimal input radius.
- Don't add shadows.
- Don't use gradients.
- Don't soften language to be "friendly." Be clear and direct.
- Don't hide functionality. Expose controls.
- Don't deviate from the type system. Three families, specific roles.

### Judgment Calls

When the context is ambiguous:

1. **Err toward density** if the content is informational.
2. **Err toward sparsity** if the content is navigational or introductory.
3. **Err toward explicitness** in all cases. Show more, hide less.
4. **Err toward timelessness.** If a choice feels trendy, reconsider.

### File Reference

The complete token specification is in `tokens.json`. Use it as the source of truth for all color, typography, spacing, and component values.

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

*Simple complexity. Ridding the spaces between aesthetics and function.*
