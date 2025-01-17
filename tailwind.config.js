/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins, sans-serif"],
        mono: ['Metro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif']
      },
      fontSize: {
        'clamp-xs': ['clamp(0.8403rem, 0.6403rem + 0.8678vw, 1.0578rem)'],
        'clamp-sm': ['clamp(16px,2vw,18px)'],
        'clamp-md': ['clamp(16px, 0.6403rem + 1.2702vw, 20px)'],
        'clamp-lg': ['clamp(1.875rem, 0.8678rem + 4.2975vw, 3.5rem)'],
      },
      colors: {},
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '6rem',
          '2xl': '8rem',
        },
      },
    },
  },
  plugins: [],
}
