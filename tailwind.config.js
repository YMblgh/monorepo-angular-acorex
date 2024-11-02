/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@acorex/styles/tailwind-base.js')], // <--- Add ACoreX presets
  content: [
    "./apps/**/src/**/*.{html,ts}",
    "./libs/**/src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}