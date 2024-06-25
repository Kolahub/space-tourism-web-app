/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Barlow Condensed"', 'sans-serif'],
        unique: ["Bellefair", 'serif']
      },
      width: {
        'calc-50': 'calc(40% + 10%)',
        'calc-75': 'calc(75% - 2rem)'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}