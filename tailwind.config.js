module.exports = {
  content: ['./**/*.liquid', './src/js/**/*.js', './src/css/**/*.css'],
  theme: {
    extend: {
      maxWidth: {
        page: '1280px'
      }
    }
  },
  plugins: ['prettier-plugin-tailwindcss']
};
