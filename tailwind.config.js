/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./src/**/*.{js,ts,jsx,tsx}",
    './sections/**/*.{html,js,ts,jsx,tsx}',
    './styles/**/*.{js,jsx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "gra-1": "#7aebfb",
        "gra-2": "#9c5e85",
        "gra-3": "#0d292c",
      }
    },
  },
  plugins: [],
}