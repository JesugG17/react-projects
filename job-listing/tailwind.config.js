/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(180, 29%, 50%)',
        'neutral-grayish-bg': 'hsl(180, 52%, 96%)',
        'neutral-grayish-filter': 'hsl(180, 31%, 95%)',
        'dark-grayish-cyan': 'hsl(180, 8%, 52%)',
        'very-dark-grayish-cyan': 'hsl(180, 14%, 20%)'
      },
      boxShadow: {
        'opaque': '0 20px 50px -30px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}

