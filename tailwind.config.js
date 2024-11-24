/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9036DA",
        secondary: "#0B0B0B",
      },
      fontFamily:{
        sora:["Sora"]
      },
      spacing:{
        container: "1280px" 
      }
    },
  },
  plugins: [require("daisyui")],
};