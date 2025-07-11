// tailwind.config.js
module.exports = {
    content: [
      "./index.html",  // Path to your HTML files
      "./src/**/*.{js,jsx,ts,tsx}", // Path to your JS/JSX files
    ],
    theme: {
      extend: {

        keyframes: {
          moveUp: {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(-20px)' }, // Example: Moves up by 20px
          },
        },
        animation: {
          moveUp: 'moveUp 1s ease-out',
        },

        colors: {
          customBlue: '#1e40af',
        },
      },
    },
    plugins: [],
  }