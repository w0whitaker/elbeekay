/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.njk", "./src/**/*.{njk,md}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
