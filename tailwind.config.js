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
        'secondary-yellow': '#edc038',
        'secondary-blue': '#06171E'
      },
      fontSize: {
        'lgBanner': ['6.8rem', {
          lineHeight: '1',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
      },
      gap: {
        '54' : '13.5rem'
      },
      width: {
        '23pr': 'calc(25% - 9px)',
        '33pr': 'calc(33.3% - 8px)',
        '44pr': 'calc(50% - 6px)',
      },
      height: {
        '100' : '28rem'
      }
    },
  },
  plugins: [],
}
