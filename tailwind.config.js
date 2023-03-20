/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    ...defaultTheme,
    colors: {
      ...colors,
      // sky: colors.lightBlue, // update lightBlue to sky
      // stone: colors.warmGray, // update warmGray to stone
      // neutral: colors.trueGray, // update trueGray to neutral
      "cs-dark": {
        DEFAULT: "#202123",
        800: "#2A2B32",
        700: "#353740",
        600: "#565869",
        500: "#40414F",
        400: "#444654",
        300: "#343541",
      },
      "cs-light": {
        DEFAULT: "#d9d9e3",
        900: "#ACACBE",
        800: "#ececf1",
      },
      "cs-dark-opacity": {
        DEFAULT: "1",
        75: "0.75",
        50: "0.5",
        25: "0.25",
        0: "0",
      },
      "cs-light-opacity": {
        DEFAULT: "1",
        75: "0.75",
        50: "0.5",
        25: "0.25",
        0: "0",
      },
      neutral: {
        light: "#f2f2f2", // reemplaza con tu color neutral para el tema claro
        DEFAULT: "#6B7280", // reemplaza con tu color neutral predeterminado
        dark: "#1f2937", // reemplaza con tu color neutral para el tema oscuro
      },
    },
    extend: {},
  },
  plugins: [],
};
