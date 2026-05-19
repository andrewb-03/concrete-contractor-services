import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        concrete: {
          black: "#0f0f0f",
          dark: "#1a1a1a",
          charcoal: "#2a2a2a",
          gray: "#8a8a8a",
          light: "#e8e4df",
          offwhite: "#f0ece8",
        },
        amber: {
          brand: "#f5a623",
          dark: "#d4891a",
          light: "#f8bc56",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      clipPath: {
        "diagonal-down": "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
        "diagonal-up": "polygon(0 15%, 100% 0, 100% 100%, 0 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
