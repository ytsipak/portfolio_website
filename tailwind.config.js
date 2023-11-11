/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        softsoul: ["Soft Soul", "sans-serif"],
        eastbroadway: ["East Broadway", "sans"],
        muscle: ["Muscle", "sans-serif"],
        actor: ["Actor", "sans-serif"],
        noto: ["Noto Sans JP", "sans-serif"],
      },
      colors: {
        "primary-yellow": "#FED03D",
        "primary-orange": "#F5995B",
        "primary-blue": "#597EFF",
        "primary-pink": "#FE7093",
        "secondary-grey": "#98999A",
        "secondary-darkgrey": "#242424",
        "secondary-black": "#141616",
      },
      keyframes: {
        slowPulse: {
          "50%": {
            opacity: 0.5,
          },
        },
      },
      animation: {
        slowPulse: "slowPulse 3s cubic-bezier(0.4, 0, 0.6, 0.9) infinite",
      },
    },
  },
  plugins: [],
};
