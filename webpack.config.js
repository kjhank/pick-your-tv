var path = require('path');

module.exports = {
  entry: ['whatwg-fetch', './js/app.jsx'],
  output: {
    filename: 'out.js',
    path: path.resolve(__dirname, 'js')
  },
  devServer: {
    inline: true,
    contentBase: './',
    port: 3001,
    watchContentBase: true
  },
  devtool: 'source-map',
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-2', 'react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};
