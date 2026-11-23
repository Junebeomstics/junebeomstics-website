import type { Config } from "tailwindcss";

const withAlpha = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: withAlpha("--bg"),
        surface: withAlpha("--surface"),
        fg: withAlpha("--fg"),
        muted: withAlpha("--muted"),
        subtle: withAlpha("--subtle"),
        line: withAlpha("--border"),
        accent: withAlpha("--accent"),
        "accent-soft": withAlpha("--accent-soft"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "46rem",
      },
    },
  },
  plugins: [],
};
export default config;
