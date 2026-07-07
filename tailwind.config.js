/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Brand accent — same in both themes. Change these two values to
        // re-theme the whole site's accent color.
        brand: {
          1: "#4BB2D3",
          2: "#0F96D4",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      keyframes: {
        blink: { "50%": { opacity: 0 } },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% center" },
          "50%": { backgroundPosition: "100% center" },
        },
        pulseDot: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.35)" },
        },
        spinSlow: { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        "gradient-shift": "gradientShift 6s ease infinite",
        "pulse-dot": "pulseDot 2.4s ease-in-out infinite",
        "spin-slow": "spinSlow 16s linear infinite",
      },
    },
  },
  darkMode: ["selector", '[data-theme="dark"]'],
  plugins: [],
};
