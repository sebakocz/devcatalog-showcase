/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          light: "#f2f2e6",
          dark: "#07020a"
        },
        purpleSpot: {
          50: "#efced7",
          100: "#ecb6d0",
          200: "#e489d6",
          300: "#c661da",
          400: "#9040cb",
          500: "#5f28b7",
          600: "#3c199d",
          700: "#27107d",
          800: "#1c0b59",
          900: "#120732",
        },
        alexisBlue: {
          50: "#e7d0e2",
          100: "#dabcdb",
          200: "#ab96c5",
          300: "#7774ae",
          400: "#586a97",
          500: "#40607f",
          600: "#2c5068",
          700: "#1c3b51",
          800: "#102439",
          900: "#070f22",
        },
        violetWebcap: {
          50: "#e7d2d0",
          100: "#dbbcbe",
          200: "#c596a7",
          300: "#ae7497",
          400: "#97588c",
          500: "#7f407f",
          600: "#602c68",
          700: "#451c51",
          800: "#2d1039",
          900: "#190722",
        },
        berkeleyHills: {
          50: "#e7e5d0",
          100: "#dbd8bc",
          200: "#c5bc96",
          300: "#ae9f74",
          400: "#978058",
          500: "#7f6040",
          600: "#68402c",
          700: "#51231c",
          800: "#391014",
          900: "#220711",
        },
      }
    },
  },
  plugins: [],
};
