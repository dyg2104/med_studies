var StudyActions = require('../../actions/StudyActions');

module.exports = {
	medications: function(e) {
		e.preventDefault();
		StudyActions.updateMeasurementSize('measurement:medications');
	},
	
	adverseEvents: function(e) {
		e.preventDefault();
		StudyActions.updateMeasurementSize('measurement:adverseEvents');
	},
	
	patientData: function(e) {
		e.preventDefault();
		StudyActions.updateMeasurementSize('measurement:patientData');
	}
};