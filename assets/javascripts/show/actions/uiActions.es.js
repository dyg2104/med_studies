let dispatcher = require('../dispatchers/dispatcher.es.js');

let showActions = {
	goToBackground() {
		dispatcher.dispatch({
			type: 'GO_TO_BACKGROUND'
		});
	},
	
	goToMethodology() {
		dispatcher.dispatch({
			type: 'GO_TO_METHODOLOGY'
		});
	},
	
	goToMeasurement() {
		dispatcher.dispatch({
			type: 'GO_TO_MEASUREMENT'
		});
	},
	
	goToConclusion() {
		dispatcher.dispatch({
			type: 'GO_TO_CONCLUSION'
		});
	},
	
	nextStep() {
		dispatcher.dispatch({
			type: 'NEXT_STEP'
		});
	},
	
	previousStep() {
		dispatcher.dispatch({
			type: 'PREVIOUS_STEP'
		});
	}
};

export default showActions;