/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightCol1: "#FAF9F6",
        lightCol2: "#333333",
        lightCol3: "#FF9800",
        lightCol4: "#8BC34A",
        lightCol5: "#1976D2",
        darkCol1: "#212121",
        darkCol2: "#F5F5F5",
        darkCol3: "#FF9800",
        darkCol4: "#8BC34A",
        darkCol5: "#64B5F6",
        emphasis: "#FF5722",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "fade-in-up": "fadeInUp 0.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
