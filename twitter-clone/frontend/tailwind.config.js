/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#E7EDF2',
      },
      screens: {
        'xxs-mobile': '320px',
        'xs-mobile': '375px',
        mobile: '425px',
        tablet: '768px',
        laptop: '1024px',
        'laptop-lg': '1440px',
      },
    },
  },
  plugins: [],
};
