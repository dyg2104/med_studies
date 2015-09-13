let _           = require('underscore');
let Backbone    = require('backbone');
let dispatcher  = require('../dispatchers/dispatcher.es.js');

const CHANGE_EVENT = 'change';

let _ui = {
	step: 1
};

let UIStore = _.extend({}, Backbone.Events, {
	getUI() {
		return _ui;
	},
	
	triggerChange() {
		this.trigger(CHANGE_EVENT);
	},
	
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	
	removeChangeListener(callback) {
		this.off(CHANGE_EVENT, callback);
	}
});

dispatcher.register((payload) => {
	switch(payload.type) {
		case 'GO_TO_BACKGROUND':
			_ui.step = 1;
			UIStore.triggerChange();
			break;
		case 'GO_TO_METHODOLOGY':
			_ui.step = 2;
			UIStore.triggerChange();
			break;
		case 'GO_TO_MEASUREMENT':
			_ui.step = 3;
			UIStore.triggerChange();
			break;
		case 'GO_TO_CONCLUSION':
			_ui.step = 4;
			UIStore.triggerChange();
			break;
	}
});

dispatcher.register((payload) => {
	switch(payload.type) {
		case 'NEXT_STEP':
			if (_ui.step < 4) {
				_ui.step += 1;
				UIStore.triggerChange();	
			}
			break;
		case 'PREVIOUS_STEP':
			if (_ui.step > 1) {
				_ui.step -= 1;
				UIStore.triggerChange();
			}
			break;
	}
});

export default UIStore;