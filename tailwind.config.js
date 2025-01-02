module.exports = {
  content: ['./**/*.liquid', './assets/*.js', './assets/*.css'],
  theme: {
    extend: {
      maxWidth: {
        page: '1280px'
      },
      fontSize: {
        h1: ['3.75rem', { lineHeight: '1.2' }],
        h2: ['3rem', { lineHeight: '1.3' }],
        h3: ['2.25rem', { lineHeight: '1.4' }],
        h4: ['1.875rem', { lineHeight: '1.5' }],
        h5: ['1.5rem', { lineHeight: '1.6' }],
        h6: ['1.25rem', { lineHeight: '1.6' }]
      }
    }
  },
  plugins: ['prettier-plugin-tailwindcss']
};
