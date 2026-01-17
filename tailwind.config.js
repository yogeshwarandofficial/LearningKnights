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
      colors: {
        primary: {
          DEFAULT: '#FFD700', // Gold
          dark: '#C5A009',   // Dark Gold
          light: '#FFE55C',  // Light Gold
        },
        secondary: {
          DEFAULT: '#111111', // Rich Black
          foreground: '#FFD700',
        },
        accent: {
          DEFAULT: '#FFD700',
          dark: '#B8860B', // Dark Goldenrod
        },
        background: {
          light: '#FFFFFF',
          DEFAULT: '#050505', // Deep Black
          paper: '#121212',   // Card background
        },
        gold: {
          100: '#FFF9C4',
          200: '#FFF176',
          300: '#FFEB3B',
          400: '#FDD835',
          500: '#FFD700',
          600: '#FBC02D',
          700: '#F9A825',
          800: '#F57F17',
          900: '#E65100',
        },
        'royal-black': {
          DEFAULT: '#000000',
          900: '#0a0a0a',
          800: '#121212',
          700: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

