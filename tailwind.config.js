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
      xs: '500px',
      '2xs': '600px',
      '3xs': '700px',
      md: '800px',
      '2md': '900px',
      '3md': '1000px',
      '4md': '1100px',
      lg: '1200px',
      '2lg': '1300px',
      xl: '1400px',
      '2xl': '1600px',
      '3xl': '1900px'
    }
  },
  plugins: [],
}
