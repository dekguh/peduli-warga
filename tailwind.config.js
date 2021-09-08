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
        '550px': '550px',
        '350px': '350px'
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
          '50%': { transform : 'translateY(10%)' },
          '100%': { transform : 'translateY(0)' },
        },
        slowXBounce: {
          '0%': { transform : 'translateX(0)' },
          '50%': { transform : 'translateX(3%)' },
          '100%': { transform : 'translateX(0)' },
        }
      },
      animation: {
        slowbounce: 'slowBounce 3s infinite linear',
        'slow-x-bounce': 'slowXBounce 3s infinite linear',
      },
      backgroundImage: theme => ({
        'line-small-pattern': "url('/src/images/line-small-pattern.png')",
        'line-long-pattern': "url('/src/images/line-long-pattern.png')",
        'about-image-1': "url('/src/images/medical-appointment-doctor-healthcare-40568.jpeg')",
        'about-image-2': "url('/src/images/pexels-anna-shvets-4225920.jpg')",
      })
    },
  },
  variants: {
    extend: {
      padding: ['last'],
      margin: ['last'],
      borderWidth: ['last']
    },
  },
  plugins: [],
}
