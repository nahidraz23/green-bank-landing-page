/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        "primary": "#FFFFFF",
        "secondary": "#ADB2B1"
      }
    },
  },
  plugins: [],
}

