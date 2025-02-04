/** @type {import('tailwindcss').Config} */
export default {
  content: ["./extensions/banner-boost/**/*.liquid"],
  theme: {
    extend: {
      animation : {
        blink: 'blink 1.4s infinite both'
      },
      keyframes: {
        blink: {
          '0%': {
            opacity: '0.2',
          },
          '20%': {
            opacity: '1',
          },
          '100%': {
            opacity: ' 0.2',
          },
        },
      }
    },
  },
  plugins: [],
}

