/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'inputBorder': '#1212121a',
      'outInputBorder': '#412f2f1a',
      'outframBorder': '#E9E9E9',
      'btnColor': '#262626',
      'white': '#fff',
      'sidebarBorder': '#a2a1a833',
      'lightred': '#F9EAEB',
      'borderL': "#EC232B",
      'active': '#7B7B7B',
      'nav': "#EC232B",
      'infoLabel': '#A2A1A8',
      'infoAns': '#16151C'

      
    },
  },
  plugins: [],
};
