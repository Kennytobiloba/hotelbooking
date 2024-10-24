/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite GB S"', 'sans-serif'], // Adding custom font
        roboto: ['Roboto', 'sans-serif'],
        titillium:["Titillium Web", "sans-serif"]
      },
      colors: {
        yellow: '#FFB22C', // Adding the custom color
      },
    },
  },
  plugins: [],
}

