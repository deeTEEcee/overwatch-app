var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  devtool: "source-map",
  module : {
    loaders : [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        // include : APP_DIR,
        loader : 'babel'
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader?sourceMap!sass-loader?sourceMap"
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      // for debugging
      { test: require.resolve("immutable"), loader: "expose-loader?Immutable" }
    ]
  },
  // for path loading of files (absolute, relative, etc.)
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
};

module.exports = config;
