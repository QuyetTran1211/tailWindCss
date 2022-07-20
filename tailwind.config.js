/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    debugScreens: {
      position: ['top','left']
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
