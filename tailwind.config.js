module.exports = {
  theme: {
    extend: {
      colors: {
        customPrimary: "#a2ca57", // Custom color added here
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"], // Ensures all relevant files are scanned for Tailwind classes
};
