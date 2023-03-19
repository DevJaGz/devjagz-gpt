/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      ...colors,
      sky: colors.lightBlue, // update lightBlue to sky
      stone: colors.warmGray, // update warmGray to stone
      neutral: colors.trueGray, // update trueGray to neutral
      "cs-dark": {
        DEFAULT: "#202123",
        800: "#2A2B32",
        700: "#343541",
        600: "#565869",
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
    },
    extend: {},
  },
  plugins: [],
};
