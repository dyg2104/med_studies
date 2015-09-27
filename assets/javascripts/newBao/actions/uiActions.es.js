const showActions = {
	goToBackground(actionContext, payload, done) {
		actionContext.dispatch('GO_TO_BACKGROUND');
	},
	
	goToMethodology(actionContext, payload, done) {
		actionContext.dispatch('GO_TO_METHODOLOGY');
	},
	
	goToMeasurement(actionContext, payload, done) {
		actionContext.dispatch('GO_TO_MEASUREMENT');
	},
	
	goToConclusion(actionContext, payload, done) {
		actionContext.dispatch('GO_TO_CONCLUSION');
	},
	
	nextStep(actionContext, payload, done) {
		actionContext.dispatch('NEXT_STEP');
	},
	
	previousStep(actionContext, payload, done) {
		actionContext.dispatch('PREVIOUS_STEP');
	}
};

export default showActions;