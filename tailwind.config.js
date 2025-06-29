/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#000000",
        sub:"#F19747",
        main: "#ACC3CC",
        sub01: "#ABD27B",
        sub02: "#FBD7B7",
        sub03: "#579FBB",
        sub04: "#93C259",
        sub05: "#E4F0FF",
        sub06: "#DAEBC8",
        grayLight: "#F7F7F7",
        grayMiddle: "#CCCCCC",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        Family_1: ["'Ryogothic'", "sans-serif"],
        Family_2: ["'Sukhumvit Set'", "sans-serif"],
        Family_3: ["'Helvetica'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
