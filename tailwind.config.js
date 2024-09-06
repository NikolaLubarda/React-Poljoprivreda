/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Praćenje svih JSX, TSX fajlova
  ],
  theme: {
    extend: {
      colors: {
        "custom-green": "rgba(0, 128, 0, 0.3)", // Dodajte prilagođenu boju sa transparencijom
        "custom-gray": "#f5f5f5", // Primer druge prilagođene boje
        "custom-dark-green": "#004d00", // Primer treće prilagođene boje
      },
      spacing: {
        3: "12px", // Dodavanje prilagođenog razmaka
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"], // Primer dodavanja prilagođene font porodice
      },
    },
  },
  plugins: [],
};
