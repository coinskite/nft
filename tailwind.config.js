module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./comp/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": '1400px'
    },
    colors: {
      primary: "#00AC4F",
      light: "#A5A5A5"
    },
    extend: {},
  },
  plugins: [],
}
