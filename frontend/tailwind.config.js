const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    colors: {
      custom: {
        background: "#161E2E",
        accent: "#292D3E",
        contrast: "#99A6F3"
      },
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}