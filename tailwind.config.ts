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
        brand: {
          charcoal: "#1C1F24",
          "charcoal-light": "#2A2E35",
          orange: "#EA580C",
          "orange-dark": "#C2410C",
          gray: "#4B5563",
          "gray-light": "#F3F4F6",
          "gray-mid": "#D1D5DB",
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
