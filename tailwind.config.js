/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0f0fb',
          100: '#e0e1f7',
          200: '#c2c3ef',
          300: '#a3a5e7',
          400: '#8588de',
          500: '#6570df',
          600: '#6570df',
          700: '#5560cf',
          800: '#3d45a0',
          900: '#211b62',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
