/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      fraunces: ["Fraunces", "sans"],
    },
    screens: {
      xss: "376",
      xs: "576px",
    },
  },
  plugins: [],
};
