module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Poppins', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        navy: '#121C46',
      },
      transitionDuration: {
        '0': '0ms'
      }
    },
  },
  variants: {
    extend: {
      padding: ['last']
    },
  },
  plugins: [],
}
