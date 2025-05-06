/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#E2E4E6", //Background = #F6F8FA
        secondary: "#5B6B7F", //sub-text
        tertiary: "#FFFFFF", //card shadow
        "black-100": "#0D1A26",  //prev: #100d25
        "black-200": "#5B6B7F", //prev: #090325
        "white-100": "#FFFFFF", // prev: #f3f3f3
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(13, 26, 38, 0.08)",  //prev: #211e35
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg_2.png')",
      },
    },
  },
  plugins: [],
};
