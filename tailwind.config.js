/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)"
      },
    },
  },
  plugins: [
    require('daisyui'), require("tailgrids/plugin")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#79157a",
          "secondary": "#87D373",
          "accent": "#87D373",
          "neutral": "#79157a",
          "base-100": "#220022",
          "info": "#87D373",
          "success": "#87D373",
          "warning": "#87D373",
          "error": "#79157a",
          },
        },
      ],
    },
}

