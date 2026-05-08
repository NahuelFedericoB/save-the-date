/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Pone a Playfair como la fuente serif principal
        serif: ['"Playfair Display"', "serif"],
        // Pone a Montserrat como la fuente sans principal
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
