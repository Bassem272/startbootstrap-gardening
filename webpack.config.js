const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/scripts.js',
  output: {
    filename: 'scripts.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    usedExports: true, // Enable tree shaking
  },
};
