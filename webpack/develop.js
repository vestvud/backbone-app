'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var autoprefixer = require('autoprefixer');
var SvgStore = require('webpack-svgstore-plugin');

module.exports = function(_path) {
  return {
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'eslint-loader'
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
          test: /\.svg$/,
          loader: 'file-loader!svgo-loader'
        },
        {
          test: /\.(ttf|eot|woff|woff2|jpg|png|gif)$/,
          loader: 'file-loader'
        },
        {
          test: /\.jade$/,
          loader: "jade"
        }
      ]
    },
    eslint: {
      configFile: '.eslintrc'
    },
    postcss: [autoprefixer({browsers: ['last 2 versions', 'ie >= 9', 'Opera >= 12']})],
    plugins: [
      new ExtractTextPlugin('/[name].css'),
      new SvgStore(path.join(_path, 'src', 'assets', 'sprite', '**/*.svg'), '/', {
        name: 'sprite.[hash].svg',
        prefix: ''
      })
    ]
  };
};