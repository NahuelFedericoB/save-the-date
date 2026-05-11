/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        aegean: "#005BAB",
        bougainvillea: "#E10098",
        sand: "#F5F5DC",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
