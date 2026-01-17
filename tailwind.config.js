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
          DEFAULT: '#0B5CFF',
          dark: '#0949CC',
        },
        accent: {
          DEFAULT: '#FFD700',
          dark: '#E6C200',
        },
        background: {
          light: '#FFFFFF',
          DEFAULT: '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

