/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',   // Small screens and up
        'md': '768px',   // Medium screens and up
        'lg': '1024px',  // Large screens and up
      }
    },
  },
  plugins: [
    require("tailwindcss-transitions")()
  ],
}