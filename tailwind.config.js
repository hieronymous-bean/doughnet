module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          lightest: '#fbfafd',
          light: '#bcaffd',
          base: '#2516C7'
        },
        secondary: {
          base: '#06A06B'
        },
        white: '#ffffff',
        gray: {
          lightest: '#ededed',
          dark: '#4b4b4b'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
