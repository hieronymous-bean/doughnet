module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          primary: {
            base: '#0052CC',
            light: '#0086FF',
            lighter: '#DFF0FF',
            lightest: '#F0F4FB',
            dark: '#021A9D'
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
          tint: '#fafafa',
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
      borderWidth: {
        '1': '1.5px',
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
