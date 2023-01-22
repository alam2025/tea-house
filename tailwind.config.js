/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'bg-alam': "url('/images/banner.png')",
          
        },
      },
    },
    plugins: [],
  }