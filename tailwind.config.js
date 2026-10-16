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
        cover: ["Cormorant Garamond", "serif"],
      },
      backgroundImage: {
        "cover-mobile": 'url("/hero-mobile.png")',
        "cover-desktop": 'url("/hero-desktop.png")',
        "cover-grain":
          "radial-gradient( circle at 20% 20%, rgba(0, 0, 0, 0.08) 0.4px, transparent 0.5px ), radial-gradient( circle at 80% 30%, rgba(0, 0, 0, 0.05) 0.5px, transparent 0.6px ), radial-gradient( circle at 40% 80%, rgba(0, 0, 0, 0.05) 0.4px, transparent 0.5px )",
        "cover-overlay":
          "linear-gradient( to bottom, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.08) 35%, rgba(255, 255, 255, 0.14) 100% )",
        "cover-light":
          "radial-gradient( circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 35%, transparent 75% )",
        "cover-line":
          "linear-gradient( 90deg, transparent 0%, rgba(24, 24, 24, 0.78) 50%, transparent 100% )",
      },
      keyframes: {
        "cover-fade": {
          from: {
            opacity: "0",
            transform: "translateY(18px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "cover-reveal": {
          from: {
            opacity: "0",
            filter: "blur(14px)",
            transform: "translateY(40px) scale(0.985)",
          },
          to: {
            opacity: "1",
            filter: "blur(0)",
            transform: "translateY(0) scale(1)",
          },
        },
        "cover-amp": {
          from: {
            opacity: "0",
            transform: "translateY(16px) scale(0.88)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        "cover-line": {
          from: {
            opacity: "0",
            transform: "scaleX(0.2)",
          },
          to: {
            opacity: "1",
            transform: "scaleX(1)",
          },
        },
      },
      animation: {
        "cover-intro":
          "cover-fade 1800ms cubic-bezier(0.16, 1, 0.3, 1) 500ms forwards",
        "cover-primary":
          "cover-reveal 2400ms cubic-bezier(0.16, 1, 0.3, 1) 700ms forwards",
        "cover-secondary":
          "cover-reveal 2400ms cubic-bezier(0.16, 1, 0.3, 1) 1100ms forwards",
        "cover-amp":
          "cover-amp 1800ms cubic-bezier(0.16, 1, 0.3, 1) 950ms forwards",
        "cover-meta":
          "cover-fade 2000ms cubic-bezier(0.16, 1, 0.3, 1) 1400ms forwards",
        "cover-line":
          "cover-line 1800ms cubic-bezier(0.16, 1, 0.3, 1) 1900ms forwards",
      },
    },
  },
  plugins: [],
};
