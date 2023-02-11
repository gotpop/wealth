/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-bebas)"],
        body: ["var(--font-montserrat)"],
      },
      colors: {
        'primary': '#FBBD5A',
        'secondary': '#EBA639',
        'accent': '#c2410c',
        'brand-grey-1': '#EBEBEB',
        'brand-grey-2': '#333131',
        'brand-grey-3': '#161616',
        'brand-grey-4': '#BFBFBF',
        'brand-grey-5': '#292828',
        'brand-grey-6': '#1C1C1C',
        'brand-grey-7': '#2B2929',
      },
      backgroundImage: {
        'hero': "url('../../public/images/bg.jpg')",
        'glow': "url('../../public/images/glow.png')",
      },
      scale: {
        '99': '.99',
      }
    }
  },
  plugins: [],
}
