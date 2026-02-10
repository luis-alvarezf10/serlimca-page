/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffd034',
        'text': '#2f2f2f',
        'text-light': '#7c1212ff',
      }
    },
  },
  plugins: [],
}

