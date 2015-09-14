var newActions = require('../../actions/newActions.es.js');

module.exports = {
	eligibilityCriteria: function(e) {
		e.preventDefault();
		newActions.updateEligibilityCriteriaSize();
	},

	patientCharacteristics: function(e) {
		e.preventDefault();
		newActions.updatePatientCharacteristicsSize();
	}	
};