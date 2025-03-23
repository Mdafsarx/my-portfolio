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
  },
  plugins: [],
};
