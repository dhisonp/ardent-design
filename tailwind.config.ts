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
        sans: ["var(--font-sans)", "Inter", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Domine", "Georgia", "serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "Consolas", "monospace"],
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
