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
      backgroundImage: {
        'home-mobile': "url('/home/background-home-mobile.jpg')",
        'home-tablet': "url('/home/background-home-tablet.jpg')",
        'home-desktop': "url('/home/background-home-desktop.jpg')",

        'destination-mobile': "url('/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('/destination/background-destination-tablet.jpg')",
        'destination-desktop': "url('/destination/background-destination-desktop.jpg')",

        'crew-mobile': "url('/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('/crew/background-crew-desktop.jpg')",

        'technology-mobile': "url('/technology/background-technology-mobile.jpg')",
        'technology-tablet': "url('/technology/background-technology-tablet.jpg')",
        'technology-desktop': "url('/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}