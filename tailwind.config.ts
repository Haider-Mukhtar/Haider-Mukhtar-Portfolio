/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        secbackground: "rgba(var(--secbackground))",
        heading: "rgba(var(--heading))",
        subheading: "rgba(var(--subheading))",
        text: "rgba(var(--text))",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-motion"),
    require("tailwindcss-animated"),
    require("tailwind-scrollbar"),
  ],
};
