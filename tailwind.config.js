/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'footer': 'inset 0 -20px 30px 0 rgb(255 248 19 / 0.25)'
      },
      fontFamily: {
        'page-heading': ['Fraternite', 'serif'],
        'sans': ['PP Neue Montreal', 'system-ui', 'sans-serif'],
        'footer': ['Illusion Serif', 'mono']
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 7s linear infinite',
        'float': 'float 5s ease-in-out var(--delay, 0ms) infinite',
        'orbit': 'orbit 30s linear var(--delay, 0ms) infinite',
        'orbit-rev': 'orbit 30s linear var(--delay, 0ms) infinite reverse'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)'},
          to: { transform: 'translateX(100%)'}
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(1rem)'}
        },
        'orbit' : {
          '0%': { transform: "rotate(0deg) translateY(var(--radius)) rotate(0deg)" },
          '100%': { transform: "rotate(360deg) translateY(var(--radius)) rotate(-360deg)" }
        }
      },
      colors: {
        'yellow': '#FFF813',
        'card-black': '#101010',
        'card-hover': '#252525',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

