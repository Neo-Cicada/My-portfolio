/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
      },
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
          500: '#ef4444',
        }
      },
      fontSize: {
        'display': '48px',
        'display-medium': '24px', 
        'dispay-subhead': '40px',
        'h1':'36px',
        'h2':'32px',
        'h3':'28px',
        'h4':'24px',
        'h5':'20px',
        'h6':'16',
        'paragraph-1': '20px', 
        'paragraph-2': '16px', 
        'paragraph-3': '12px', 
        'button':'20px',
        'button-2':'16px',
        'underline': '20px',
        
      },
      lineHeight: {
        'display': '56px',
        'display-medium': '28px',
        'dispay-subhead': '48px',
        'h1':'44px',
        'h2':'40px',
        'h3':'32px',
        'h4':'28px',
        'h5':'24px',
        'h6':'20px',
        'paragraph-1': '24px', 
        'paragraph-2': '20px', 
        'paragraph-3': '16px', 
        'button':'24px',
        'button-2':'20px',

        'underline': '24px',
       
      },
      letterSpacing: {
        'display': '-2%',
        'display-medium': '-2%',
        'display-subhead': '-2%',
        'h1':'-2%',
        'h2':'-2%',
        'h3':'-2%',
        'h4':'-2%',
        'h5':'-2%',
        'h6':'-2%',
        'paragraph-1': '2%', 
        'paragraph-2': '2%', 
        'paragraph-3': '2%', 
        'button':'2%',
        'button-2':'2%',

        'underline': '24px',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-outline': {
          WebkitTextFillColor: 'transparent',
          WebkitTextStroke: 'currentColor',
          WebkitTextStrokeWidth: '3px',
        },
        '.text-outline-medium': {
          WebkitTextFillColor: 'transparent',
          WebkitTextStroke: 'currentColor',
          WebkitTextStrokeWidth: '2px', // Adjust the stroke width as needed
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
