/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#FFD8BE',   // peach
        secondary:'#9381FF',  // purple
        tertiary:'#FFEEDD',   // light peach
        quaternary:'#B8B8FF', // light purple
        quinary:'#F8F7FF',    // light blue
      }
    },
  },
  plugins: [],
}

