var $           = require('jquery');
var _           = require('underscore');
var Backbone    = require('backbone');
var dispatcher  = require('../dispatchers/dispatcher.es.js');
var helpers     = require('./newStoreHelpers');

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
	conclusion: {
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
			},
			measurement: {
				medications: [{name: undefined, units: undefined, type: undefined, before: {data: undefined, sd: undefined}, after: {data: undefined, sd: undefined}, difference: {data: undefined, sd: undefined}}],
				adverseEvents: [{name: undefined, units: undefined, type: undefined, before: {data: undefined, sd: undefined}, after: {data: undefined, sd: undefined}, difference: {data: undefined, sd: undefined}}],
				patientData: [{name: undefined, units: undefined, type: undefined, before: {data: undefined, sd: undefined}, after: {data: undefined, sd: undefined}, difference: {data: undefined, sd: undefined}}]
			}
		}	
	],
	totalData: {
		methodology: {
			eligibilityCriteria: [{name: undefined, units: undefined, low: undefined, high: undefined}],
			patientCharacteristics: [{name: undefined, units: undefined, type: undefined, data: undefined, sd: undefined}]
		},
		measurement: {
			medications: [{name: undefined, units: undefined, type: undefined, before: {data: undefined, sd: undefined}, after: {data: undefined, sd: undefined}, difference: {data: undefined, sd: undefined}}],
			adverseEvents: [{name: undefined, units: undefined, type: undefined, before: {data: undefined, sd: undefined}, after: {data: undefined, sd: undefined}, difference: {data: undefined, sd: undefined}}],
			patientData: [{name: undefined, units: undefined, type: undefined, before: {data: undefined, sd: undefined}, after: {data: undefined, sd: undefined}, difference: {data: undefined, sd: undefined}}]
		}
	}
};


var newStore = _.extend({}, Backbone.Events, {
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
	},
	
	submit: function() {
		$.ajax({
			url: '/studies/',
			method: 'POST',
			dataType: 'json',
			data: JSON.stringify(_study)
		});
	}
});

dispatcher.register(function(payload) {
	var keys;
	var value;
	
	switch(payload.type) {
		case 'UPDATE_FIELD':
			keys = payload.keys.split(':');
			value = payload.value;
			helpers.storeValue(keys, value, _study);
			newStore.triggerChange();
			break;
		case 'UPDATE_FIELDS':
			keys = payload.keysArray;
			value = payload.value;
			_.each(keys, function(key) {
				helpers.storeValue(key.split(':'), value, _study);
			});
			newStore.triggerChange();
			break;
		case 'UPDATE_CGTD_FIELDS':
			keys = payload.keys;
			value = payload.value;
			helpers.storeCGTDValue(keys, value, _study);
			newStore.triggerChange();			
			break;
	}
});

dispatcher.register(function(payload) {
	var keys;
	var value;
	
	switch(payload.type) {
		case 'UPDATE_ARRAY_SIZE':
			keys = payload.keys.split(':');
			helpers.pushArray(keys, _study);
			newStore.triggerChange();
			break;
		case 'UPDATE_CONTROL_GROUPS_SIZE':
			helpers.pushControlGroup(_study);
			newStore.triggerChange();
			break;
		case 'UPDATE_ELIGIBILITY_CRITERIA_SIZE':
			helpers.pushEligibilityCriteria(_study);
			newStore.triggerChange();
			break;
		case 'UPDATE_PATIENT_CHARACTERISTICS_SIZE':
			helpers.pushPatientCharacteristics(_study);
			newStore.triggerChange();
			break;
		case 'UPDATE_MEASUREMENT_SIZE':
			keys = payload.keys.split(':');
			helpers.pushMeasurementData(keys, _study);
			newStore.triggerChange();
			break;
	}	
});

dispatcher.register(function(payload) {	
	switch(payload.type) {
		case 'SUBMIT':
			newStore.submit();
			break;
	}
	
});

export default newStore;