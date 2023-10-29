/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#EEF5FF',
        'blue-light': '#BFE0FF',
        'blue-dark': '#03295A',
        'cyan-light': '#F8F9FE',
        'violet-light': '#483EFF',
      },
    },
  },
  plugins: [],
};
