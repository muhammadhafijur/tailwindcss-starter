/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './pages/**/*.{html,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "quicksand": ["Quicksand", "sans-serif"],
        "nunito": ["Nunito Sans", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
        "caveat": ["Caveat", "cursive"]
      },
      colors: {
        "custom-green-400": "#00DC82",
        "custom-green-500": "#00C16A",
        "custom-gray": "#020420",
        "custom-black": "#231f20",
        "custom-black-hover": "#413C3D",
        "custom-dark-500": "#1D1D35",
        "custom-dark-600": "#020420",
        "muted": "#6e6e77",
        separator: "#F0F0F0"
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), 'prettier-plugin-tailwindcss'],
}
