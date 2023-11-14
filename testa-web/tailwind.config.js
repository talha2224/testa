/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppinsFont:"Poppins, sans-serif"
      },
      boxShadow:{
        navShadow:"0px 10px 10px 0px rgba(0, 0, 0, 0.10)",
        btnShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.05)"
      },
      screens:{
        "lg":"1105px"
      }
    },
  },
  plugins: [
  ],
}

