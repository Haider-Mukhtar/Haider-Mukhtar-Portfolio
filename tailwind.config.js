/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			primaryRegular: [
  				'Regular'
  			],
  			primarySemiBold: [
  				'SemiBold'
  			],
  			primaryBold: [
  				'Bold'
  			]
  		},
  	}
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwindcss-motion'),
    require("tailwindcss-animate"),
		require('tailwind-scrollbar'),
],
}

