/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme: {
        fontFamily: {
          sans: ['Montserrat', 'sans-serif'],
          // Other font families if needed
        },
      },

    },
  },
  plugins: [
    require('preline/plugin'),
    function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',  // IE and Edge
          'scrollbar-width': 'none',  // Firefox
        },
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',  // Safari and Chrome
        },
      });
    }
  ],
}


