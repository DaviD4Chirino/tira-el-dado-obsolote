module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    colors: {
      text: "#f2e9e9",
      background: "#080404",
      primary: "#545454",
      secondary: "#9a9a9a",
      accent: "#e2e2e2",
    },
  },
};
