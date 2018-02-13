const path = require('path');

module.exports = {
  entry: {
    main: './front/index',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      }
    ],
  },
  devtool: 'sourcemap',
};
