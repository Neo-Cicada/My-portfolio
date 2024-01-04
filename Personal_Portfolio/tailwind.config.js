/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "black": '#000000',
          "neutral": '#404040',
          "white": '#FFFFFF',
        },
        zinc: {
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          500: '#71717A',
          800: '#27272A',
        },
        error:{
          500: 'ef4444'
        }
      },
    },
  },
  plugins: [],
}
