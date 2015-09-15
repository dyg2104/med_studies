const dispatcher = require('../dispatchers/dispatcher.es.js');

const newActions = {
	updateField(keys, value) {
		dispatcher.dispatch({
			type: 'UPDATE_FIELD',
			keys: keys,
			value: value
		});
	},
	
	updateFields(keysArray, value) {
		dispatcher.dispatch({
			type: 'UPDATE_FIELDS',
			keysArray: keysArray,
			value: value
		});
	},
	
	updateCGTDFields(keys, value) {
		dispatcher.dispatch({
			type: 'UPDATE_CGTD_FIELDS',
			keys: keys,
			value: value
		});
	},
	
	updateArraySize(keys) {
		dispatcher.dispatch({
			type: 'UPDATE_ARRAY_SIZE',
			keys: keys
		});
	},
	
	updateControlGroupsSize() {
		dispatcher.dispatch({ 
			type: 'UPDATE_CONTROL_GROUPS_SIZE'
		});
	},
	
	updateEligibilityCriteriaSize() {
		dispatcher.dispatch({
			type: 'UPDATE_ELIGIBILITY_CRITERIA_SIZE'
		});
	},
	
	updatePatientCharacteristicsSize() {
		dispatcher.dispatch({
			type: 'UPDATE_PATIENT_CHARACTERISTICS_SIZE'
		});
	},
	
	updateMeasurementSize(keys) {
		dispatcher.dispatch({
			type: 'UPDATE_MEASUREMENT_SIZE',
			keys: keys
		});
	},
	
	submit() {
		dispatcher.dispatch({
			type: 'SUBMIT'
		});
	}
};

export default newActions;