const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem'
    },
    extend: {
      fontFamily: {
        inter: [
          'Inter',
          ...defaultTheme.fontFamily.sans
        ]
      },
      colors: {
        'accenture': {
          400: '#D100C9',
          900: '#70259B'
        }
      }
    },
  },
  plugins: [],
}

