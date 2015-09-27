const newActions = {
	updateField(actionContext, payload, done) {
		actionContext.dispatch('UPDATE_FIELD', payload);
	},
	
	updateSize(actionContext, payload, done) {
		actionContext.dispatch('UPDATE_SIZE', payload);
	}
};

export default newActions;
