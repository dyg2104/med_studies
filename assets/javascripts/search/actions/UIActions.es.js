const UIDispatcher = require('../dispatchers/UIDispatcher.es.js');

let UIActions = {
	updateField(key, value) {
		UIDispatcher.dispatch({
			type: 'UPDATE_FIELD',
			key: key,
			value: value
		});
	}
};

export default UIActions;