'use strict';

var webpack = require('webpack');
var path = require('path');
var WatchIgnorePlugin = webpack.WatchIgnorePlugin;

module.exports = function(_path, outputPath) {
  return {
    output: {
      path: path.join((outputPath || _path)),
      filename: '/[name].js'
    },
    devServer: {
      port: 8990,
      inline: true,
      publicPath: '/bld',
      host: '0.0.0.0',
      info: true,
      hot: false,
      historyApiFallback: true
    },
    entry: {
      app: './src/app.js'
    },
    module: {
      loaders: []
    },
    resolve: {
      extensions: ['', '.js', '.styl', '.png', '.svg'],
      modulesDirectories: ['node_modules', 'static']
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new WatchIgnorePlugin([
        path.resolve(_path, '/webpack')
      ])
    ]
  };
};