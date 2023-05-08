/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,html,md}"],
  theme: {
    fontFamily: {
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        3: "18px",
      },
    },
  },
  plugins: [],
};
