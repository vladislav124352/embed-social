module.exports = {
  content: ['./build/**/*.html'],
  darkMode: 'media',
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto']
      }
    },
    screens: {
      '2xs': '500px',
      md: '700px',
      '2md': '900px',
      '3md': '1100px',
      lg: '1200px',
      '2lg': '1300px',
      xl: '1400px',
      '2xl': '1600px',
      '3xl': '1900px'
    }
  },
  plugins: [],
}
