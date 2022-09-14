/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '375px',
      md: '500px',
      lg: '1000px',
      xl: '1440px',

    },
    extend: {
      colors:{
        textGray: '#404040',
        navGray: '#A6A6A6',
        lightGray: '#F2F2F2',
        '3':'repeat(3, minmax(0, 1fr))',

      },
    },
  },
  plugins: [],
}
