var _                = require('underscore');
var Backbone         = require('backbone');
var StudyDispatcher  = require('../dispatchers/StudyDispatcher');

var CHANGE_EVENT = 'change';

var _study = window.study = {
	title: undefined,
	authors: [],
	description: undefined,
	diseaseName: undefined,
	complications: [],
	currentTreatments: [],
	trials: undefined,
	involvedParties: [],
	references: [],
	methodology: {
		design: undefined,
		diagnosis: undefined,
		primaryEndpoint: undefined,
		secondaryEndpoints: []
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
			eligibilityCriteria: [],
			patientCharacteristics: [],
		},
		measurement: {
			medications: [],
			adverseEvents: [],
			patientData: []
		},
		result: {
			primaryEndpoint: undefined
		}
	}
};

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
	var keys = payload.keys;
	var values = payload.values;
	_study[keys] = values;
});

module.exports = StudyStore;