/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#FFD700", // Default gold color
          light: "#FFECB3", // Optional: lighter shade
          dark: "#E5C100", // Optional: darker shade
        },
      },
    },
  },
  plugins: [],
};
