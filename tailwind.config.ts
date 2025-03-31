/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.1rem",
        sm: "1.1rem",
        md: "1.3rem",
        lg: "1.5rem",
        xl: "1.2rem",
        "2xl": "1rem",
      },
      screens: {
        lg: "720px",
        xl: "800px",
        "2xl": "1150px",
      },
    },
    extend: {
      colors: {
        primary: {
          100: "#8E4BEB",
          200: "#A872FD",
        },
        secondary: {
          100: "#77e1a9",
         
        },
        gray: {
          50:'#5a5a5a33',
          100: "#5a5a5a66",
          200: "#5a5a5a99",
          300: "#5a5a5aCC",
        },
        black: "#000000",
        white: "#FFFFFF",
        white2:'#aa9e9e'
      },
    },
  },
  plugins: [require('daisyui'),],
};
