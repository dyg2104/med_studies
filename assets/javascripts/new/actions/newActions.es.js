var StudyDispatcher = require('../dispatchers/dispatcher.es.js');

var StudyActions = {
	updateField: function(keys, value) {
		StudyDispatcher.dispatch({
			type: 'UPDATE_FIELD',
			keys: keys,
			value: value
		});
	},
	
	updateFields: function(keysArray, value) {
		StudyDispatcher.dispatch({
			type: 'UPDATE_FIELDS',
			keysArray: keysArray,
			value: value
		});
	},
	
	updateCGTDFields: function(keys, value) {
		StudyDispatcher.dispatch({
			type: 'UPDATE_CGTD_FIELDS',
			keys: keys,
			value: value
		});
	},
	
	updateArraySize: function(keys) {
		StudyDispatcher.dispatch({
			type: 'UPDATE_ARRAY_SIZE',
			keys: keys
		});
	},
	
	updateControlGroupsSize: function() {
		StudyDispatcher.dispatch({ 
			type: 'UPDATE_CONTROL_GROUPS_SIZE'
		});
	},
	
	updateEligibilityCriteriaSize: function() {
		StudyDispatcher.dispatch({
			type: 'UPDATE_ELIGIBILITY_CRITERIA_SIZE'
		});
	},
	
	updatePatientCharacteristicsSize: function() {
		StudyDispatcher.dispatch({
			type: 'UPDATE_PATIENT_CHARACTERISTICS_SIZE'
		});
	},
	
	updateMeasurementSize: function(keys) {
		StudyDispatcher.dispatch({
			type: 'UPDATE_MEASUREMENT_SIZE',
			keys: keys
		});
	},
	
	submit: function() {
		StudyDispatcher.dispatch({
			type: 'SUBMIT'
		});
	}
};

module.exports = StudyActions;