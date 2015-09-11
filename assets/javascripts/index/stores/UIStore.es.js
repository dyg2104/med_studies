const _             = require('underscore');
const Backbone      = require('backbone');
const UIDispatcher  = require('../dispatchers/UIDispatcher.es.js');
const helpers       = require('./UIStoreHelpers.es.js');

const CHANGE_EVENT = 'change';

let _uiStore = window.uiStore = {
	step: 'search'
};

let UIStore = _.extend({}, Backbone.Events, {
	getStep() {
		return _uiStore['step'];
	},
	
	triggerChange() {
		this.trigger(CHANGE_EVENT);
	},
	
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	
	removeChangeListener(callback) {
		this.off(CHANGE_EVENT, callback);
	}
});

UIDispatcher.register(function(payload) {
	switch(payload.type) {
		case 'UPDATE_FIELD':
			helpers.storeValue(payload.key, payload.value, _uiStore)	
			UIStore.triggerChange();
			break;
	}
});

export default UIStore;