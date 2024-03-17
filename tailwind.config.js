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
        'infinite-scroll': 'infinite-scroll 3s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)'},
          to: { transform: 'translateX(100%)'}
        }
      },
      colors: {
        'yellow': '#FFF855',
      }
    },
  },
  plugins: [],
}

