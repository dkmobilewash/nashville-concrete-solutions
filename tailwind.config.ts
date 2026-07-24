import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette derived from the Nashville Concrete Solutions logo
        // (public/nashville-concrete-solutions.png): navy + charcoal skyline
        // + concrete grays, no orange. "accent" is a brighter tint of the
        // logo's navy, introduced only because a pure navy-on-navy site has
        // no way to make CTAs/links pop — everything else is sampled
        // directly from the logo artwork.
        brand: {
          navy: "#012451",
          "navy-light": "#395477",
          accent: "#2268C3",
          "accent-dark": "#1C539C",
          gray: "#585858",
          "gray-light": "#F2F4F7",
          "gray-mid": "#C3C9D1",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-source-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-bitter)", "Georgia", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
