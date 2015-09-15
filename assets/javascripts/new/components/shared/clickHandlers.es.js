const newActions = require('../../actions/newActions.es.js');

let handlers = {
	eligibilityCriteria(e) {
		e.preventDefault();
		newActions.updateEligibilityCriteriaSize();
	},

	patientCharacteristics(e) {
		e.preventDefault();
		newActions.updatePatientCharacteristicsSize();
	},
	
	medications(e) {
		e.preventDefault();
		newActions.updateMeasurementSize('measurement:medications');
	},
	
	adverseEvents(e) {
		e.preventDefault();
		newActions.updateMeasurementSize('measurement:adverseEvents');
	},
	
	patientData(e) {
		e.preventDefault();
		newActions.updateMeasurementSize('measurement:patientData');
	}
}

export default handlers;