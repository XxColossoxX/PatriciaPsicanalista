/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#f4f7f6', // Very light mint/gray
          100: '#e3ebe8', // Light mint
          200: '#c5d8d3', // Soft green-blue
          300: '#9ebFB9', // Sage
          400: '#769F98', // Darker sage
          500: '#5A827B', // Muted teal (Primary)
          600: '#466661',
          700: '#39524E',
          800: '#314441',
          900: '#2A3937',
        },
        'accent': {
          50: '#fdf6f7', // Light pinkish white
          100: '#fcebf0', // Very pale pink
          200: '#fadbe4', // Pale pink
          300: '#f6bfce', // Soft pink
          400: '#f094af', 
          500: '#e66b8e', // Action color (muted rose)
          600: '#d24a6f',
          700: '#b43253',
        },
        'warm': {
          50: '#faf9f6', // Off-white
          100: '#f5f2ed', // Cream
          200: '#ebe5da', // Beige
          300: '#ded3c2', // Darker beige
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px',
        },
      },
      extend: {
        animation: {
          'fade-in': 'fadeIn 0.5s ease-out forwards',
          'slide-up': 'slideUp 0.5s ease-out forwards',
          'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          'bounce-slow': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          }
        }
      }
    },
  },
  plugins: [],
}
