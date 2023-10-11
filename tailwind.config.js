/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.tap-highlight-transparent': {
          '-webkit-tap-highlight-color': 'transparent',
          'tap-highlight-color': 'transparent',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

