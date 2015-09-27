const BaseStore = require('fluxible/addons/BaseStore');

class UIStore extends BaseStore {
	constructor(dispatcher) {
		super(dispatcher);
		
		this._ui = {
			step: 1
		};
	}
	
	getUI() {
		return this._ui;
	}
	
	getStep() {
		return this._ui.step;
	}
	
	goToBackground() {
		this._ui.step = 1;
		this.emit('change');
	}
	
	goToMethodology() {
		this._ui.step = 2;
		this.emit('change');
	}
	
	goToMeasurement() {
		this._ui.step = 3;
		this.emit('change');
	}
	
	goToConclusion() {
		this._ui.step = 4;
		this.emit('change');
	}
	
	nextStep() {
		if (this._ui.step < 4) {
			this._ui.step += 1;
			this.emit('change');
		}
	}
	
	previousStep() {
		if (this._ui.step > 1) {
			this._ui.step -= 1;
			this.emit('change');
		}
	}
}

UIStore.storeName = 'UIStore';
UIStore.handlers = {
	'GO_TO_BACKGROUND': 'goToBackground',
	'GO_TO_METHODOLOGY': 'goToMethodology',
	'GO_TO_MEASUREMENT': 'goToMeasurement',
	'GO_TO_CONCLUSION': 'goToConclusion',
	'NEXT_STEP': 'nextStep',
	'PREVIOUS_STEP': 'previousStep'
};

export default UIStore;