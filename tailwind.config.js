/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#9ABF80',
        'secondary': '#54BA45',
        'tertiary': '#BAAB45',
        'light': '#F8F9FA',
        'dark': '#212529',
      }
    },
  },
  plugins: [
    require('daisyui'), 
  ],
}
