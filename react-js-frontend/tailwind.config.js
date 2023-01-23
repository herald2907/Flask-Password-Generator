/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      spacing: { 
        '840': '840px',
      },
      width: {
        '1080': '1080px',
      }
    },
  },
  plugins: [],
}
