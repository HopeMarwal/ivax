/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        league: ['League Spartan', 'sans-serif'],
      },
      colors: {
        borderSideColor: '#EDEEE9',
        'primary-green': '#2A524C',
        'primary-yellow': '#f2c94c',
        'secondary-yellow': 'edc038'
      }
    },
  },
  plugins: [],
}
