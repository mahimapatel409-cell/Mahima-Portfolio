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
        dark: {
          bg: '#030014',
          card: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)'
        },
        light: {
          bg: '#f8fafc',
          card: 'rgba(0, 0, 0, 0.02)',
          border: 'rgba(0, 0, 0, 0.06)'
        },
        cyber: {
          neon: '#00f2fe',
          purple: '#4facfe',
          violet: '#7f00ff',
          pink: '#ff007f'
        }
      },
      fontFamily: {
        sans: ['SF Pro Display', 'Inter', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradientX 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradientX: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}