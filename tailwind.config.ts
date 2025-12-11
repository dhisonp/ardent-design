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
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10A860", // Ardent Green
          600: "#056336", // Darker for text legibility
          700: "#0F8A50",
          800: "#065F3A",
          900: "#064E32",
        },
        red: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#DC2626",
          600: "#B91C1C",
          700: "#991B1B",
          800: "#7F1D1D",
          900: "#450A0A",
        },
        amber: {
          500: "#E4A010",
        },
        goldenrod: {
          50: "#FEF9E7",
          100: "#FDF0C4",
          200: "#FCE49C",
          300: "#F9D56F",
          400: "#F5C13D",
          500: "#D4A012",
          600: "#B8890F",
          700: "#96700C",
          800: "#6B5009",
          900: "#4A3706",
        },
        ocean: {
          50: "#E8F4F8",
          100: "#C8E4ED",
          200: "#9DCFE0",
          300: "#6BB5CF",
          400: "#3D98BA",
          500: "#1A7A9C",
          600: "#156786",
          700: "#11536D",
          800: "#0C3D50",
          900: "#082A38",
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
