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
      xmd: '1100px',
      lg: '1200px',
      xl: '1400px',
      '2xl': '1900px'
    }
  },
  plugins: [],
}
