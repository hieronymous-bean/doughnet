module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          primary: {
            base: '#3B3947',
            two: '#35558A',
            three: '#C4BBBA',
            four: '#6F6F6B',
            five: '#A7617D',
            six: '#CEA8BE',
            seven: ''
          },
        },
        supporting: {
          red: '#C94055',
          redLight: '#EDBFC6',
          green: '#22C58B',
          greenLight: '#B2EBD7'
        },
        white: {
          base: '#ffffff',
          tint: '#fcfcfc',
        },
        gray: {
          light: '#EDEFF3',
          base: '#9E9FAD',
          dark: ''
        },
        black: {
          base: '#000000'
        }
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif']
      },
      boxShadow: {
        md: '0px 0px 10px -1px rgba(0, 0, 0, 0.1)'
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
