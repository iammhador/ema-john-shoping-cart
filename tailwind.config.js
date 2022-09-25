/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff9900",
          secondary: "#d66f2f",
          accent: "#a0f7eb",
          neutral: "#372D39",
          "base-100": "#EAF1F5",
          info: "#96CAE4",
          success: "#34DF81",
          warning: "#F7DE64",
          error: "#FB5677",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
