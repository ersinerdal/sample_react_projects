
//webpack bundle management system
//https://webpack.github.io/docs/configuration.html
//cheap-module-source-map

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',  // dev-server
    './src/index.jsx' //entry point
  ],
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, 'dist'), //build output folder
    publicPath: '/build/',
    filename: 'bundle.js' // index.html reference
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // all JSX files
        loader: "babel-loader", //transpiler (JSX, ES6)
        include: path.join(__dirname, 'src')
      }
    ]
  }
}
