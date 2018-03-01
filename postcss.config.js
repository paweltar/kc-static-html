let tailwindcss = require('tailwindcss');
let autoprefixer = require('autoprefixer');
let uncss = require('postcss-uncss');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    autoprefixer({ grid: true }),
    uncss({
      html: ['*.html'],
      ignore: []
    }),
  ]
}