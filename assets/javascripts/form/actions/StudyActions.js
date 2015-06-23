var StudyDispatcher = require('../dispatchers/StudyDispatcher');

var StudyActions = {
	updateField: function(keys, values) {
		StudyDispatcher.dispatch({
			keys: keys,
			values: values
		});
	}
};

module.exports = StudyActions;