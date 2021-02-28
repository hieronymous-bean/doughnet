module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          primary: {
            base: '#3D3C3F',
            baseTint: '#20294f',
            two: '#545358',
            three: '#AAABA6',
            four: '#5A625A',
            five: '#77677F',
            dark: ''
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
          tint: '#fbfbfb',
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
