import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-lato)", "Helvetica", "sans-serif"],
      },
      colors: {
        earth: {
          50:  "#f9f6f0",
          100: "#f0e9da",
          200: "#dfd0b3",
          300: "#c9ae85",
          400: "#b48d5c",
          500: "#9a7040",
          600: "#7d5a32",
          700: "#634629",
          800: "#4f3822",
          900: "#3d2c1b",
        },
        forest: {
          50:  "#f2f7f2",
          100: "#e0ede0",
          200: "#b8d4b7",
          300: "#87b485",
          400: "#5a9158",
          500: "#3d7a3b",
          600: "#2e612c",
          700: "#254d23",
          800: "#1d3c1c",
          900: "#162e15",
        },
        cream: "#faf8f3",
        "warm-white": "#fffef9",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(135deg, rgba(30,60,20,0.85) 0%, rgba(60,90,30,0.75) 50%, rgba(100,130,50,0.60) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
