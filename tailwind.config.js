/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        siteTheme: "#140342",
        textTheme: "#2fcfaf",
        cardTheme: "rgb(31,35,47)",
      },
    },
  },
  plugins: [],
};