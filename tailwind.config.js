/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      colors: {
        primary: "#5544FF",
        lightGray: "#f6f7f9",
      },
    },
  },
  plugins: [],
};
