/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      poppins:'"Poppins", sans-serif',
      logo:"logo",
      Roboto:`'Roboto', sans-serif`
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#445144",
          "secondary": "#f6d860",
          "accent": "#fff",
          "neutral": "#3d4451",
          "base-100": "#ffffff"
        },
      },
    ],
  },
}

