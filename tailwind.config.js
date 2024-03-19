/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'page-heading': ['Fraternite', 'serif'],
        'sans': ['PP Neue Montreal', 'system-ui', 'sans-serif']
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 7s linear infinite',
        'float': 'float 5s ease-in-out var(--delay, 0ms) infinite'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)'},
          to: { transform: 'translateX(100%)'}
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(1rem)'}
        }
      },
      colors: {
        'yellow': '#FFF813',
      }
    },
  },
  plugins: [],
}

