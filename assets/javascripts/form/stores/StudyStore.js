var _                = require('underscore');
var Backbone         = require('backbone');
var StudyDispatcher  = require('../dispatchers/StudyDispatcher');

var CHANGE_EVENT = 'change';

var _study = window.study = {
	title: undefined,
	authors: [''],
	description: undefined,
	diseaseName: undefined,
	complications: [''],
	currentTreatments: [''],
	trials: [''],
	involvedParties: [''],
	references: [''],
	methodology: {
		design: undefined,
		diagnosis: undefined,
		primaryEndpoint: undefined,
		secondaryEndpoints: ['']
	},
	measurement: {
		statisticalAnalysis: undefined
	},
	result: {
		summary: undefined
	},
	controlGroups: [],
	totalData: {
		methodology: {
			eligibilityCriteria: [{}],
			patientCharacteristics: [{}],
		},
		measurement: {
			medications: [{}],
			adverseEvents: [{}],
			patientData: [{}]
		},
		result: {
			primaryEndpoint: undefined
		}
	}
};

function storeValue(keys, value, store) {
	var key = keys.shift();
	var storeHolder;
	
	if (keys.length === 0) {
		if (/\d+/.test(key)) {
			key = parseInt(key);
		}
		store[key] = value;
	} else {
		storeHolder = store[key];
		storeValue(keys, value, storeHolder);
	}
}

function pushValue(keys, store) {
	var key = keys.shift();
	var array;
	var storeHolder;
	
	if (keys.length === 0) {
		array = store[key];
		array.push('');
	} else {
		storeHolder = store[key];
		storeValue(keys, value, storeHolder);
	}
}

var StudyStore = _.extend({}, Backbone.Events, {
	getStudy: function() {
		return _study;
	},
	
	triggerChange: function() {
		this.trigger(CHANGE_EVENT);
	},
	
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	
	removeChangeListener: function(callback) {
		this.off(CHANGE_EVENT, callback);
	}
});

StudyDispatcher.register(function(payload) {
	var keys;
	var value;
	
	switch(payload.type) {
		case 'UPDATE_FIELD':
			keys = payload.keys.split(':');
			value = payload.value;
			storeValue(keys, value, _study);
			StudyStore.triggerChange();
			break;
		case 'UPDATE_ARRAY_SIZE':
			keys = payload.keys.split(':');
			pushValue(keys, _study);
			StudyStore.triggerChange();
			break;
	}
	
});

module.exports = StudyStore;