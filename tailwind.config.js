module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
        'sans': ['Source Sans Pro', 'Helvetica', 'Arial', 'sans-serif']
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
