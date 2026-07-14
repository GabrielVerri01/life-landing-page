import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1A1B1D",
        ink2: "#242527",
        sand: "#F1F0EE",
        sand2: "#FAFAF9",
        silver: "#D4D5D7",
        silverdim: "#9A9C9F",
        steel: "#797B80",
        steeldim: "#57585C",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        wrap: "1180px",
      },
      keyframes: {
        draw: { to: { strokeDashoffset: "0" } },
      },
      animation: {
        draw: "draw 2.6s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
