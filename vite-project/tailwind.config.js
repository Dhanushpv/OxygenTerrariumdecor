/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arcadian: ['Arcadian', 'serif'],
      }

    },
     screens: {
      sm: "640px",
      md: "900px", // changed from 768px to 700px
      lg: "1034px",
      xl: "1280px",
      "2xl": "1536px",
    },
    
  },
  plugins: [],
}