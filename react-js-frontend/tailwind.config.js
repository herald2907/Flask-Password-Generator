/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  darkMode: 'class',
  theme: {
    extend: {
      spacing: { 
        '840': '840px',
      },
      width: {
        '1080': '1080px',
      },
      animation: {
        'bounce': 'bounce 1s ease-in-out infinite'
      },
    },
    
  },
  plugins: [],
}
