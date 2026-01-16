/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#d81da3ff",
        secondary: {
          50: "#f8f3f6ff",
          100: "#fedbf0ff",
          200: "#febfe8ff",
          300: "#fd93e4ff",
          400: "rgba(249, 122, 217, 1)",
          500: "#de52b4ff",
          600: "#f93bc9ff",
          700: "#d81d97ff",
          800: "#af1e81ff",
          900: "#bc067cff",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
