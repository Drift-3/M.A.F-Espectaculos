const { Rubik } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['"Lobster"', 'cursive',],
        Rubik:['"Rubik"'],
      },
    },
  },
  plugins: [],
}
