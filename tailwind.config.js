/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#343537",
        primary: "#3a9d8b",
        yellow: "#ffe06c"
      }
    },
  },
  plugins: [],
}