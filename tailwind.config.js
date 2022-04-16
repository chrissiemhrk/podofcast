module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      linen: '#F7EDE8',
      black: '#000000',
      white: '#FFFFFF',
      vermillion: '#CD4631',
      gray: '#646464',
    },
    extend: {
      boxShadow: {
        subscribeBtn: '3px 3px 0px 1px rgba(180,180,180,1)',
      },
    },
  },
  plugins: [],
}
