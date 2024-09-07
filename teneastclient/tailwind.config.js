/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'charcoal': 'rgb(33 33 33)',
        'yellow-gold': 'rgb(199, 139, 88)',
        'silver': 'rgb(77, 77, 77)',
        'gold': '#c78b58'
      }
    },
  },
  plugins: [],
}

