/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        cream: '#fffaf0',
        charcoal: '#1a1a1a',
        accent: '#f59e0b',
        neutral: '#6b7280',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'drift': 'drift 15s linear infinite',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translateX(-100px) rotate(0deg)' },
          '100%': { transform: 'translateX(calc(100vw + 100px)) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}