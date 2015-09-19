const dispatcher = require('../dispatchers/dispatcher.es.js');

const newActions = {
	updateField(key, value) {
		dispatcher.dispatch({
			type: 'UPDATE_FIELD',
			key,
			value	
		});
	}
};

export default newActions;
