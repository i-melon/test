/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./dist/index.html",
    './src/**/*.{html,js,vue}',
    "./public/**/*.{html,js,vue}",
    "./dist/**/*.{html,js,vue}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

