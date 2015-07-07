var StudyActions = require('../../actions/StudyActions');

module.exports = {
	eligibilityCriteria: function(e) {
		e.preventDefault();
		StudyActions.updateEligibilityCriteriaSize();
	},

	patientCharacteristics: function(e) {
		e.preventDefault();
		StudyActions.updatePatientCharacteristicsSize();
	}	
};