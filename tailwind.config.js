/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#FF6363",
          800: "#FF1313",
        },
        brand: "#045257",
        green: "#045257",
        active: "#F6FAF7",
        gray: "#777FA1",
        skyblue: "#42A4EE",
        border: '#D0D4E4',
        idle: 'rgba(255, 255, 255, 0.5)',
        
        white:{
          500: "#F1F2F6",
        }
      },
      fontFamily: {
        'avenir': ['Avenir', 'sans-serif'],
        'avenir-light': ['Avenir-Light', 'Avenir', 'sans-serif'],
        'avenir-medium': ['Avenir-Medium', 'Avenir', 'sans-serif'],
        'avenir-heavy': ['Avenir-Heavy', 'Avenir', 'sans-serif'],
        'avenir-black': ['Avenir-Black', 'Avenir', 'sans-serif'],
        'avenir-roman': ['Avenir-Roman', 'Avenir', 'sans-serif'],

      },
      spacing: {
        '110': '110px',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        slide: 'slide 5s linear infinite',
      },

    },
  },
  plugins: [],
}
