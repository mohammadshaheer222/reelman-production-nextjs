import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-color": "#F0E9E0",
        "black-shade-900": "#0E0F0E",
        "white": "#ffff"
      },
      fontFamily: {
        playfair: ["var(--font-playfair)"],
      },
      screens: {
        "lap": { max: "1600px" },
        "md-lap": { max: "1400px" },
        "sm-lap": { max: "1200px" },
        "ipad-land": { max: "1024px" },
        "ipad": { max: "980px" },
        "mob-land": { max: "767px" },
        "mob-lg" : { max: "640px"},
        "mob": { max: "480px" },
        "sm-mob": { max: "375px" },
        "xs-mob": { max: "360px" },
      },
    },
  },
  plugins: [],
};
export default config;
