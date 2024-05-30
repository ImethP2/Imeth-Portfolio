/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pontano: ['Pontano Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}
