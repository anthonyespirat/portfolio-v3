/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  purge: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./public/index.html",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Arial", "Helvetica", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      primary: "#5688C7",
      dark: "#1B2125",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": "2rem",
      "5xl": "2.5rem",
      "3em": "3em",
      "6xl": "3.5rem",
      "7xl": "4rem",
      "8xl": "5rem",
    },
    borderRadius: {
      DEFAULT: "10px",
    },
    container: {
      padding: "1.5em",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
