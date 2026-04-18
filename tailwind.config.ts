import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean:  "#1C2B3A",
        teal:   "#3D7A8A",
        mist:   "#A6D2DC",
        sand:   "#D2B99B",
        linen:  "#F8F6F2",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter:    ["Inter", "sans-serif"],
      },
      animation: {
        "fade-up":    "fadeUp 0.8s ease forwards",
        "fade-in":    "fadeIn 0.6s ease forwards",
        "float":      "float 4s ease-in-out infinite",
        "mist-pulse": "mistPulse 3s ease-in-out infinite",
        "marquee":    "marquee 28s linear infinite",
        "spin-slow":  "spinSlow 12s linear infinite",
        "pulse-ring": "pulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        mistPulse: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%":      { opacity: "0.6", transform: "scale(1.08)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
        pulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(61,122,138,0.4)" },
          "50%":      { boxShadow: "0 0 0 16px rgba(61,122,138,0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
