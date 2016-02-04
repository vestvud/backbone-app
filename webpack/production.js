'use strict';

var webpack = require('webpack');
var ExtractTextPlugin  = require('extract-text-webpack-plugin');
var path = require('path');
var autoprefixer = require('autoprefixer');
var SvgStore = require('webpack-svgstore-plugin');

module.exports = function(_path) {
  return {
    module: {
      loaders: [
        {
          test: /\.svg$/,
          loader: 'file-loader!svgo-loader'
        },
        {
          test: /\.(png)$/,
          loader: 'url-loader'
        },
        {
          test: /\.(ttf|eot|woff|woff2|jpg|gif)$/,
          loader: 'file-loader'
        },
        {
          test: /\.styl$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!stylus-loader')
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
        },
        {
          test: /\.jade$/,
          loader: "jade"
        }
      ]
    },
    postcss: [autoprefixer({browsers: ['last 2 versions', 'ie >= 9', 'Opera >= 12']})],
    plugins: [
      new ExtractTextPlugin('/[name].css'),
      new webpack.optimize.DedupePlugin(),
      new SvgStore(path.join(_path, 'src', 'assets', 'sprite', '**/*.svg'), '/', {
        name: 'sprite.svg',
        prefix: ''
      })
    ]
  };
};