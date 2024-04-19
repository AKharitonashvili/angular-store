/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#211C24",
        secondary: "#656565",
        optional: "#909090",
        "optional-2": "#EDEDED",
        "priamary-2": "#353535",
        "light-1": "#F5F5F5",
      },
      backgroundSize: {
        "auto-290": "auto 290px",
        "auto-200": "auto 200px",
      },
      backgroundPosition: {
        "center-top": "center 20%",
      },
    },
  },
  plugins: [],
};
