/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1536px",
    },
    extend: {
      colors: {
        lightLuminousGreen: "#58e9a3",
        luminousGreen: "#2fe48d",
        darkLuminousGreen: "#25b670",
        black: "#0D0D0D",
        lightBlack: "#1F1F1F",
        darkGrey: "#797979",
        grey: "#E1E1E1",
        lightGrey: "#EEEEEE",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
