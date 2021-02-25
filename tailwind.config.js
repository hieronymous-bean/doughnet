module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          primary: {
            base: '#242d58',
            two: '#9ca2ba',
            three: '#5e6edd',
            lighter: '#',
            lightest: '#',
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
          tint: '#f5f6fa',
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
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        md: '0px 0px 20px -5px rgba(0, 0, 0, 0.1)'
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
