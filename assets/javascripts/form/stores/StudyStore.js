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
		design: [''],
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
	controlGroups: [
		{
			name: undefined, 
			numPatients: undefined, 
			numMen: undefined, 
			numWomen: undefined,
			methodology: {
				eligibilityCriteria: [{name: undefined, units: undefined, low: undefined, high: undefined}],
				patientCharacteristics: [{name: undefined, units: undefined, type: undefined, data: undefined, sd: undefined}]
			}
		}
	],
	totalData: {
		methodology: {
			eligibilityCriteria: [{name: undefined, units: undefined, low: undefined, high: undefined}],
			patientCharacteristics: [{name: undefined, units: undefined, type: undefined, data: undefined, sd: undefined}]
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

function getControlGroup() {
	var criteria = [];
	
	for (var i = 0; i < _study['totalData']['methodology']['eligibilityCriteria'].length; i++) {
		criteria.push({name: undefined, units: undefined, low: undefined, high: undefined});
	}
	
	return {
		name: undefined, 
		numPatients: undefined, 
		numMen: undefined, 
		numWomen: undefined,
		methodology: {
			eligibilityCriteria: criteria
		}
	};
};


function getEligibilityCriteria() {
	return {
		name: undefined, 
		units: undefined, 
		low: undefined, 
		high: undefined
	};
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

function pushArray(keys, store) {
	var key = keys.shift();
	var array;
	var storeHolder;
	
	if (keys.length === 0) {
		array = store[key];
		array.push('');
	} else {
		storeHolder = store[key];
		pushArray(keys, storeHolder);
	}
}

// TODO simplify this method since it will never need recursion
function pushControlGroup(keys, store) {
	var key = keys.shift();
	var controlGroup;
	var array;
	var storeHolder;

	if (keys.length === 0) {
		controlGroup = getControlGroup();
		array = store[key];
		array.push(controlGroup);
	} else {
		storeHolder = store[key];
		pushControlGroup(keys, storeHolder);
	}
}

function pushEligibilityCriteria() {
	var controlGroups = _study['controlGroups'];
	var totalData = _study['totalData'];
	
	for (var i = 0; i < controlGroups.length; i++) {
		controlGroups[i]['methodology']['eligibilityCriteria'].push(getEligibilityCriteria());
	}
	
	totalData['methodology']['eligibilityCriteria'].push(getEligibilityCriteria());
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
		case 'UPDATE_FIELDS':
			keys = payload.keysArray;
			value = payload.value;
			_.each(keys, function(key) {
				storeValue(key.split(':'), value, _study);
			});
			StudyStore.triggerChange();
			break;
		case 'UPDATE_ARRAY_SIZE':
			keys = payload.keys.split(':');
			pushArray(keys, _study);
			StudyStore.triggerChange();
			break;
		case 'UPDATE_CONTROL_GROUPS_SIZE':
			keys = payload.keys.split(':');
			pushControlGroup(keys, _study);
			StudyStore.triggerChange();
			break;
		case 'UPDATE_ELIGIBILITY_CRITERIA_SIZE':
			pushEligibilityCriteria();
			StudyStore.triggerChange();
			break;
	}
	
});

module.exports = StudyStore;