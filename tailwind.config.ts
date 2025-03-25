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
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        primary: {
          // 100: "#66FCF1",
          100: "#8E4BEB",
        },
        secondary: {
          100: "#80EEB4",
         
        },
        gray: {
          50:'#5a5a5a33',
          100: "#5a5a5a66",
          200: "#5a5a5a99",
          300: "#5a5a5aCC",
        },
        black: "#000000",
        white: "#FFFFFF",
        white2:'#908686'
      },
    },
  },
  plugins: [require('daisyui'),],
};
