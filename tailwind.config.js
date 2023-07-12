/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      animation: {
        "text-flicker-in-glow": "text-flicker-in-glow 4s linear infinite both",
        "vibrate-1": "vibrate-1 0.3s linear infinite both",
        "bounce-top": "bounce-top 0.9s ease both",
        "slide-tr": "slide-tr 1.8s cubic-bezier(0.250, 0.460, 0.850, 1) both",
        "slide-tr-sp":
          "slide-tr 1.8s cubic-bezier(0.250, 0.460, 0.850, 1) both",
        "slide-out-blurred-right":
          "slide-out-blurred-right 0.45s cubic-bezier(0.895, 0.030, 0.685, 0.220)   both",
      },
      keyframes: {
        "text-flicker-in-glow": {
          "0%": {
            opacity: "0",
          },
          "10%,10.2%,20%,20.6%,30%,30.6%,45%,55.1%,57%,60.1%,65%,75.1%,77%,85.1%,86%":
            {
              opacity: "0",
              "text-shadow": "none",
            },
          "10.1%": {
            opacity: "1",
            "text-shadow": "none",
          },
          "20.1%": {
            opacity: "1",
            "text-shadow": "0 0 30px rgba(255, 255, 255, .25)",
          },
          "30.1%,30.5%,45.1%,50%,55%": {
            opacity: "1",
            "text-shadow":
              "0 0 30px rgba(255, 255, 255, .45), 0 0 60px rgba(255, 255, 255, .25)",
          },
          "57.1%,60%": {
            opacity: "1",
            "text-shadow":
              "0 0 30px rgba(255, 255, 255, .55), 0 0 60px rgba(255, 255, 255, .35)",
          },
          "65.1%,75%": {
            opacity: "1",
            "text-shadow":
              "0 0 30px rgba(255, 255, 255, .55), 0 0 60px rgba(255, 255, 255, .35), 0 0 100px rgba(255, 255, 255, .1)",
          },
          "77.1%,85%": {
            opacity: "1",
            "text-shadow":
              "0 0 30px rgba(255, 255, 255, .55), 0 0 60px rgba(255, 255, 255, .4), 0 0 110px rgba(255, 255, 255, .2), 0 0 100px rgba(255, 255, 255, .1)",
          },
          "86.1%,to": {
            opacity: "1",
            "text-shadow":
              "0 0 30px rgba(255, 255, 255, .6), 0 0 60px rgba(255, 255, 255, .45), 0 0 110px rgba(255, 255, 255, .25), 0 0 100px rgba(255, 255, 255, .1)",
          },
        },
        "vibrate-1": {
          "0%,to": {
            transform: "translate(0)",
          },
          "20%": {
            transform: "translate(-2px, 2px)",
          },
          "40%": {
            transform: "translate(-2px, -2px)",
          },
          "60%": {
            transform: "translate(2px, 2px)",
          },
          "80%": {
            transform: "translate(2px, -2px)",
          },
        },
        "slide-tr": {
          "0%": {
            transform: "translateY(0) translateX(0)",
          },
          to: {
            transform: "translateY(-500px) translateX(600px)",
          },
        },
        "slide-tr-sp": {
          "0%": {
            transform: "translateY(0) translateX(0)",
          },
          to: {
            transform: "translateY(500px) translateX(10px)",
          },
        },
      },
      screens: {
        min667: "0px, 668px",
      },
    },
  },
};
