/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./components/**/*"],
  theme: {
    extend: {
      keyframes: {
        leftMenuShow: {
          "0%": { transform: "translateX(-100%)" },
          "25%": { transform: "translateX(-75%)" },
          "50%": { transform: "translateX(-50%)" },
          "75%": { transform: "translateX(-25%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(-10%)", opacity: "0" },
          "50%": { transform: "translateY(-5%)", opacity: "0.5" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
      },
      animation: {
        "left-menu-show": "leftMenuShow 0.2s linear 1",
        "slide-up": "slideUp 0.2s linear 1",
      },
    },
  },
  plugins: [],
};
