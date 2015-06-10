var _        = require('underscore');
var webpack  = require('webpack');
var config   = require('./main.config.js');

config = _.extend(config, {
  debug: true,
  displayErrorDetails: true,
  outputPathinfo: true,
  devtool: 'sourcemap',
});

config.plugins = [
  new webpack.optimize.CommonsChunkPlugin('common', 'common-bundle.js')
]

module.exports = config;