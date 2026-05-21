import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
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
          900: "#0A0A0A", // Deep black for high contrast
          950: "#050505",
        },
        emerald: {
          50: "#E6F6EC",
          100: "#C3E9D2",
          200: "#8FD5AC",
          300: "#58C084",
          400: "#26AB62",
          500: "#009148", // US Graphic Green
          600: "#007038",
          700: "#00562B",
          800: "#003F20",
          900: "#002915",
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
        goldenrod: {
          50: "#FFFAEB",
          100: "#FFF0C2",
          200: "#FFE285",
          300: "#FFD147",
          400: "#FFC01F",
          500: "#FDB515", // US Graphic Gold
          600: "#C78D0A",
          700: "#946805",
          800: "#634503",
          900: "#332301",
        },
        ocean: {
          50: "#E0F2F7",
          100: "#B3DFF0",
          200: "#80C2E8",
          300: "#4DA1DE",
          400: "#2680D0",
          500: "#0060BF", // US Graphic Blue
          600: "#004A94",
          700: "#00366E",
          800: "#002447",
          900: "#001224",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Helvetica Neue", "Arial", "sans-serif"],
        serif: [
          "var(--font-serif)",
          "Old Standard TT",
          "Source Serif",
          "Domine",
          "Times New Roman",
          "serif",
        ],
        mono: [
          "var(--font-mono)",
          "IBM Plex Mono",
          "Geist Mono",
          "Fira Code",
          "Berkeley Mono",
          "monospace",
        ],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.35" }],
        sm: ["0.875rem", { lineHeight: "1.4" }],
        base: ["1rem", { lineHeight: "1.4" }], // Tighter line height
        lg: ["1.125rem", { lineHeight: "1.4" }],
        xl: ["1.25rem", { lineHeight: "1.3" }],
        "2xl": ["1.5rem", { lineHeight: "1.25" }],
        "3xl": ["1.875rem", { lineHeight: "1.2" }], // Tighter heading
        "4xl": ["2.25rem", { lineHeight: "1.1" }], // Very tight display
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
