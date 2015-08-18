const _                 = require('underscore');
const $                 = require('jquery');
const Backbone          = require('backbone');
const SearchDispatcher  = require('../dispatchers/SearchDispatcher.es.js');
const UIActions         = require('../actions/UIActions.es.js');
const helpers           = require('./SearchStoreHelpers.es.js');

const CHANGE_EVENT = 'change';

let _search = {};
let _results = {};

let SearchStore = _.extend({}, Backbone.Events, {
	getSearch() {
		return _search;
	},
	
	getResults() {
		return _results;	
	},
	
	triggerChange() {
		this.trigger(CHANGE_EVENT);	
	},
	
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	
	removeChangeListener(callback) {
		this.off(CHANGE_EVENT, callback);
	},
	
	submit() {
		let promise = $.ajax({
			url: '/api/search/',
			method: 'POST',
			dataType: 'json',
			data: JSON.stringify(_search)
		});
		
		promise.done(function(responses) {
			let studies = [];
			
			for (let res of responses) {
				if (res && res['_source']) {
					studies.push(res['_source']);	
				}
			}
			
			_results = studies;
			UIActions.updateField('step', 'results');
		});
	}
});

SearchDispatcher.register(function(payload) {	
	switch(payload.type) {
		case 'UPDATE_FIELD':
			helpers.storeValue(payload.key, payload.value, _search)	
			SearchStore.triggerChange();
			break;
		case 'SUBMIT':
			SearchStore.submit();
			break;
	}
});

export default SearchStore;