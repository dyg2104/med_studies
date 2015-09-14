var newActions = require('../../actions/newActions.es.js');

module.exports = {
	medications: function(e) {
		e.preventDefault();
		newActions.updateMeasurementSize('measurement:medications');
	},
	
	adverseEvents: function(e) {
		e.preventDefault();
		newActions.updateMeasurementSize('measurement:adverseEvents');
	},
	
	patientData: function(e) {
		e.preventDefault();
		newActions.updateMeasurementSize('measurement:patientData');
	}
};