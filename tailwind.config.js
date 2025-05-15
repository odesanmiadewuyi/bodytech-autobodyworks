/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ Ensures Tailwind scans your files
  ],
  
  theme: {
    extend: {
      colors: {
        primary: "#ff5733",   // 🔴 Your custom primary color
        secondary: "#ffcc00", // 🟡 Your custom secondary color
        purpleCustom: "#7E3AF2", // Custom purple
      },
    },
  },
  plugins: [],
};
