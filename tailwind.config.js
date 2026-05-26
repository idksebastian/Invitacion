/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans:  ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50:  '#FDFAF5',
          100: '#F8F2E4',
          200: '#F0E5CC',
          300: '#E8D7B4',
          400: '#D4BC8E',
          500: '#BF9F68',
          600: '#A07E45',
          700: '#7A5F32',
          800: '#54411F',
          900: '#2E230E',
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.9s ease both',
        'fade-in':    'fadeIn 1.2s ease both',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%':      { opacity: 0.85, transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}