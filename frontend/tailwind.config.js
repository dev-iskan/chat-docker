const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        rose: colors.rose,
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet
      }
    }
  }
}
