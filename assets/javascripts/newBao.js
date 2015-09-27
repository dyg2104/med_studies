// Libraries
var React                     = require('react');
var Fluxible                  = require('fluxible');

// Stores
var UIStore                   = require('./newBao/stores/UIStore.es.js');
var NewStore                  = require('./newBao/stores/NewStore.es.js');

// Top Level Component
var NewWrapper                = require('./newBao/NewWrapper.jsx');

// Helpers
var provideContext            = require('fluxible-addons-react/provideContext');
var connectToStores           = require('fluxible-addons-react/connectToStores');
var createElementWithContext  = require('fluxible-addons-react/createElementWithContext');


var NewWrapperConnected = provideContext(connectToStores(NewWrapper, [UIStore, NewStore], function(context) {
	var uiStore = context.getStore(UIStore);
	var newStore = context.getStore(NewStore);
	
	return {
		step: uiStore.getStep(),
		study: newStore.getStudy()
	};
}));

var app = new Fluxible({
	component: NewWrapperConnected,
	stores: [UIStore, NewStore]
});

var appContext = app.createContext();

React.render(
	createElementWithContext(appContext), 
	document.getElementById('newWrapper')
);