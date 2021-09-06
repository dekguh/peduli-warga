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
      },
      maxWidth: {
        '550px': '550px'
      },
      minWidth: {
        '120px': '120px'
      },
      boxShadow: {
        primary: '0 0 8px rgba(0, 0, 0, 0.07)'
      },
      borderRadius: {
        '4px': '4px'
      },
      keyframes: {
        slowBounce: {
          '0%': { transform : 'translateY(0)' },
          '50%': { transform : 'translateY(15%)' },
          '100%': { transform : 'translateY(0)' },
        }
      },
      animation: {
        slowbounce: 'slowBounce 2s infinite linear'
      },
      backgroundImage: theme => ({
        'line-small-pattern': "url('/src/images/line-small-pattern.png')"
      })
    },
  },
  variants: {
    extend: {
      padding: ['last']
    },
  },
  plugins: [],
}
