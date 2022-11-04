/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      backgroundImage: {
        app: 'url(/background.png)',
      },
      colors: {
        ignite: {
          500: '#129E57',
        },
        gray: {
          100: '#E1E1E6',
          300: '#8D8D99',
          600: '#323238',
          800: '#202024',
          900: '#121214',
        },
        yellow: {
          500: '#F7DD43',
          700: '#E5CD3D',
        },
      },
    },
  },
  plugins: [],
}
