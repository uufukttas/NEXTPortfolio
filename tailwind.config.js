module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}" ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        azure: '20px 20px 0 0 #16b9c1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
