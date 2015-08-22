const SearchDispatcher = require('../dispatchers/SearchDispatcher.es.js');

let SearchActions = {
	updateField(key, value) {
		SearchDispatcher.dispatch({
			type: 'UPDATE_FIELD',
			key: key,
			value: value	
		});
	},
	
	submit() {
		SearchDispatcher.dispatch({
			type: 'SUBMIT'
		});
	}
};

export default SearchActions