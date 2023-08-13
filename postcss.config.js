module.exports = {
    plugins: {
        'postcss-nested': {before},
        'postcss-import': {},
        'tailwindcss/nesting': 'postcss-nesting',
        tailwindcss: {},
        autoprefixer: {},
    }
  }