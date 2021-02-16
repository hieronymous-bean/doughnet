module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          lightest: '#B3D8D7',
          lighter: '#A7BAB8',
          light: '#75998F',
          base: '#003937',
          dark: '#828B77',
          darkest: '#485659'
        },
        secondary: {
          one: '#FDF9E5',
          two: '#ECDCD4',
          three: '#DAE3F7',
          four: '#F0EDEA'
        },
        black: '#020D0D',
        white: '#ffffff',
        gray: {
          lightest: '#ededed',
          base: '#B6BECD',
          dark: '#333333'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
