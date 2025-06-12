/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FFB86A", // Orange
        slate: "#314158", // Slate
        slate400: "#90A1B9", // Slate 400
        slate50: "#F8FAFC", // Slate 50
        slate900: "#0F172B", // Slate 900 
        slate500: "#62748E",
        text: "#111827", // Dark Gray

      },
      fontFamily: {
        firacode: ["Fira Code", "monospace"],
        serif: ["Merriweather", "serif"],
      },
      screens: {
        "max-900": { max: "900px" }, // Custom breakpoint for max-width 900px
      },
    },
  },
  plugins: [],
};
