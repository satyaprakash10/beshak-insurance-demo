/** @type {import('tailwindcss').Config} */

const primaryGradient = {
  "primary-500": "#8B6FFF",
};

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
          "primary-indigo": "#8B6FFF",
      "dark-gray": "rgba(51, 51, 51, 0.7)",
      "light-gray": "#333333",
      extralight: "rgba(51, 51, 51, 0.1)",
      },
    },
  },
  plugins: [],
};
