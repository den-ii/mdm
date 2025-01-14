/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black2: "#2a2c24",
        primary: "#1D2433",
        primary_900: "#013198",
        primary_700: "#0151FD",
        primary_100: "#F0F5FF",
        secondary: "#071827",
        neutral_500: "#5C6F7F",
        neutral_300: "#E1E6EF",
        shade: "#AAAABF",
        matte: "#1E2833",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
