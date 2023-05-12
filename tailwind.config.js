/** @type {import('tailwindcss').Config} */
import path from "path";
export default {
  content: [path.join(__dirname, "./src/**/*.{njk,md}")],
  presets: [
    require("./src/assets/design-tokens/colors.js"),
    require("./src/assets/design-tokens/typography.js"),
    require("./src/assets/design-tokens/spacing.js"),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
