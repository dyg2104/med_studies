var StudyDispatcher = require('../dispatchers/StudyDispatcher');

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
	
	updateArraySize: function(keys) {
		StudyDispatcher.dispatch({
			type: 'UPDATE_ARRAY_SIZE',
			keys: keys
		});
	},
	
	updateControlGroupsSize: function(keys) {
		StudyDispatcher.dispatch({ 
			type: 'UPDATE_CONTROL_GROUPS_SIZE', 
			keys: keys 
		});
	}
};

module.exports = StudyActions;