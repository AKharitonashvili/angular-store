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
        "auto-200": "auto 200px",
        "auto-290": "auto 290px",
        "240-340": "240px 340px",
        "auto-600": "auto 600px",
      },
      backgroundPosition: {
        "center-top": "center 20%",
        "bottom-right": "bottom right 10%",
        "bottom-left": "bottom left 10%",
        "center-left": "center left",
      },
    },
  },
  plugins: [],
};
