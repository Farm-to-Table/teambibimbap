/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#E4F0D5",
        logo: "#067d00",
        green: "#27a623",
      },
      fontFamily: {
        spicyrice: ["Spicy Rice", "serif"],
        creterount: ["Crete Round", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
