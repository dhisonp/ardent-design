import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#B0B0B0", // Darkened for punchier borders (USG style)
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#0A0A0A", // Deep black for high contrast
          950: "#050505",
        },
        emerald: {
          400: "#34D399",
          500: "#10A860", // Ardent Green
          600: "#056336", // Darker for text legibility
        },
        red: {
          500: "#DC2626",
          600: "#B91C1C",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Domine", "Georgia", "serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "Consolas", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.5" }], // Tighter line height
        lg: ["1.125rem", { lineHeight: "1.5" }],
        xl: ["1.25rem", { lineHeight: "1.375" }],
        "2xl": ["1.5rem", { lineHeight: "1.25" }],
        "3xl": ["1.875rem", { lineHeight: "1.2" }], // Tighter heading
        "4xl": ["2.25rem", { lineHeight: "1.1" }], // Very tight display
      },
      letterSpacing: {
        tight: "-0.025em",
        wide: "0.05em",
        wider: "0.1em",
      },
      spacing: {
        // Overriding default spacing for "tightness"
        "4": "0.875rem", // 14px (was 16px)
        "5": "1rem",     // 16px (was 20px)
        "6": "1.25rem",  // 20px (was 24px)
        "8": "1.75rem",  // 28px (was 32px)
        "12": "2.5rem",  // 40px (was 48px)
        "16": "3.5rem",  // 56px (was 64px)
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
