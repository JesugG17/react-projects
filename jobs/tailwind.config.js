/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'violet-custom': '#334680',
        'search': '#1E86FF',
        'search-hover': '#4397f8',
        'background': '#F6F7FB',
        'text': '#B9BDCF',
      },
      backgroundImage: {
        'hero': 'url(/backgroundImg.png)'
      }
    },
  },
  plugins: [],
}

