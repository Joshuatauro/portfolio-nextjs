module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
      fontFamily: {
        inter: ['inter']
    },
    extend: {
      colors: {
        'black-primary': '#111111',
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark']
    },
  },
  plugins: [],
}
