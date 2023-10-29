/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue, js, ts, tsx}',
    './tailwind-theme.js',
  ],
  theme: {
    extend: {
      colors: {
        'ca-orange': '#FB8500',
        'ca-yellow': '#FFB703',
        'ca-darkblue': '#023047',
        'ca-lightblue': '#219EBC',
        'ca-gray': '#969696',
        'ca-white': '#000',
        'ca-black': '#212121',
      },
      fontFamily: {
        roboto: "'Roboto', 'sans-serif'",
      },
    },
  },
  plugins: [],
};
