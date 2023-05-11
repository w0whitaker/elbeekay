/** @type {import('tailwindcss').Config} */
import path from "path";
export default {
  content: [path.join(__dirname, "./src/**/*.{njk,md}")],
  theme: {
    extend: {},
  },
  plugins: [],
};
