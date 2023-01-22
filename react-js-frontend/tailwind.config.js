/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      spacing: { 
        '840': '840px',
      }
    },
  },
  plugins: [],
}
