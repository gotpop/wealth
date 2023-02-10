/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      heading: ["var(--font-bebas)"],
      body: ["var(--font-montserrat)"],
    },
    colors: {
      'primary': '#FBBD5A',
      'accent': '#c2410c',
    },
  },
  plugins: [],
}
