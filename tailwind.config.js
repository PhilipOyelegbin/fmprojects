/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cardBg: "hsl(216, 50%, 16%)",
        softBlue: "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        line: "hsl(215, 32%, 27%)",
        newWhite: "hsl(0, 0%, 100%)",
        attribution: "hsl(228, 45%, 44%)",
      }
    },
  },
  plugins: [],
}
