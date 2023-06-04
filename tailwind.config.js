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
        "light-gray": "rgba(51, 51, 51, 0.7)",
        "dark-gray": "#333333",
        "extra-light": "rgba(51, 51, 51, 0.1)",
        "dark-500": "rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
