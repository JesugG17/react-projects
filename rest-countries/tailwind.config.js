/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-light': '#fff',
        'background-light': "#fafafa",
        'primary-dark': '#2B3743',
        'background-dark':  '#202D36' 
      }
    },
  },
  plugins: [],
}

