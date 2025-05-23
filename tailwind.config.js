/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#dde3ca',
          lightBlue: '#626970',
          blue: '#2f2f4d',
          brown: '#7c8071',
          darkBrown: '#262525',
          red: '#690202',
          redLight: '#a82a2a',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}