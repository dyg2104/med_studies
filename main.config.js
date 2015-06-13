var path     = require('path');
var webpack  = require('webpack');

var config = {};

// the base path which will be used to resolve entry points
config.context = __dirname;

// the main entry point for application's JS
config.entry = {
	index: './assets/javascripts/index',
	new: './assets/javascripts/new',
	show: './assets/javascripts/show'
};

config.output = {
	// app/assets/javascripts directory
	path: path.join(__dirname, 'app', 'assets', 'javascripts'),
	// the filename of the compiled bundle
	filename: '[name]-bundle.js'
};

config.module = {
	loaders: [
		{ test: /\.jsx$/, loader: "jsx-loader" }
	]
};

config.resolve = {
  // tell webpack which extensions to auto search when it resolves modules.
  extensions: ['', '.js'],
  // by default, webpack will search in `web_modules` and `node_modules`. Because we're using
  // Bower, we want it to look in there too
  modulesDirectories: ['node_modules'],
};

module.exports = config;