module.exports = {
  mode: 'jit',
  content: ["*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
