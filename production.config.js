var _                    = require('underscore');
var path                 = require('path');
var webpack              = require('webpack');
var ChunkManifestPlugin  = require('chunk-manifest-webpack-plugin');
var config               = require('./main.config.js');

config.output = _.extend(config.output, {
  path: path.join(config.context, 'public', 'assets'),
  filename: '[name]-bundle-[chunkhash].js',
  chunkFilename: '[id]-bundle-[chunkhash].js',
});

config.plugins = [
  new webpack.optimize.CommonsChunkPlugin('common', 'common-[chunkhash].js'),
  new ChunkManifestPlugin({
    filename: 'webpack-common-manifest.json',
    manfiestVariable: 'webpackBundleManifest',
  }),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.OccurenceOrderPlugin()
];

module.exports = config;