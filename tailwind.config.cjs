/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: "#58423B",
        "primary-dark": "#312724",
        secondary: "#EBE0DE",
        "secondary-dim": "#D4C3BE",
        black: "#1F1B19",
        "secondary-dark": "#8E4C37",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
