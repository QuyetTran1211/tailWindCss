/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    debugScreens: {
      position: ['top','left']
    },
    extend: {
      screens: {
        "sm":"480px"
      }
    },
    fontFamily: {
      nunito: ['Nunito Sans', 'sans-serif']
    }
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
