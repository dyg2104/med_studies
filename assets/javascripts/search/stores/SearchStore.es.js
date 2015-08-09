const _                 = require('underscore');
const Backbone          = require('backbone');
const SearchDispatcher  = require('../dispatchers/SearchDispatcher.es.js');
const helpers           = require('./SearchStoreHelpers.es.js');

const CHANGE_EVENT = 'change';

let _search = window.search = {};

let SearchStore = _.extend({}, Backbone.Events, {
	getSearch() {
		return _search;
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

SearchDispatcher.register(function(payload) {	
	switch(payload.type) {
		case 'UPDATE_FIELD':
			helpers.storeValue(payload.key, payload.value, _search)	
			SearchStore.triggerChange();
			break;
	}
});

export default SearchStore;