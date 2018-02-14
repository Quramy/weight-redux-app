const path = require('path');

module.exports = {
  entry: {
    main: './front/index',
    auth: './auth/index',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[name].js',
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
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/login\/?$/, to: '/login.html' },
      ],
    },
  },
};
