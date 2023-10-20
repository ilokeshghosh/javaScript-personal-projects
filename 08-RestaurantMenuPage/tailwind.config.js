/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['./dist/*.html'],
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-size': '1000px 800px', // Define your custom size here
      },
    },
  },
  plugins: [],
}

