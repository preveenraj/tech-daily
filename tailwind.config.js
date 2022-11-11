const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
      backgroundImage: {
        'noise-background': "url('/assets/noise.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
