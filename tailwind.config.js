module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          base: '#2B606A',
          one: '#AABFC4',
          two: '#DEEBE6',
          three: '#050505'
        },
        secondary: {
          base: '#DFBEA9',
          one: '#FFF4E7'
        },
        tertiary: {
          orange: '#FA6300',
          orangeLight: '#FEEADC',
          red: '#c46d6d',
          redLight: '#F5DBDB'
        },
        black: '#020D0D',
        white: '#ffffff',
        gray: {
          light: '#FBFCFF',
          base: '#F3F3F3',
          dark: '#232323'
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
