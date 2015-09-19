const _           = require('underscore');
const Backbone    = require('backbone');
const dispatcher  = require('../dispatchers/dispatcher.es.js');
const helpers     = require('./newStoreHelpers.es.js');

const CHANGE_EVENT = 'change';

let _study = window.study = {
	title: {
		value: null,
		type: 'string',
		default: null,
		validation: null
	},
	authors: {
		value: null,
		type: 'array',
		default: {
			value: null,
			type: 'string',
			default: null,
			validation: null
		},
		validation: null
	},
	description: {
		value: null,
		type: 'string',
		default: null,
		validation: null
	},
	diseaseName: {
		value: null,
		type: 'string',
		default: null,
		validation: null
	},
	complications: {
		value: null,
		type: 'array',
		default: {
			value: null,
			type: 'string',
			default: null,
			validation: null
		},
		validation: null
	},
	currentTreatments: {
		value: null,
		type: 'array',
		default: {
			value: null,
			type: 'string',
			default: null,
			validation: null
		},
		validation: null
	},
	trials: {
		value: null,
		type: 'array',
		default: {
			value: null,
			type: 'string',
			default: null,
			validation: null
		},
		validation: null
	},
	involvedParties: {
		value: null,
		type: 'array',
		default: {
			value: null,
			type: 'string',
			default: null,
			validation: null
		},
		validation: null
	},
	references: {
		value: null,
		type: 'array',
		default: {
			value: null,
			type: 'string',
			default: null,
			validation: null
		},
		validation: null
	},
	methodology: {
		value: null,
		type: 'object',
		default: {
			design: {
				value: null,
				type: 'array',
				default: {
					value: null,
					type: 'string',
					default: null,
					validation: null
				},
				validation: null
			},
			diagnosis: {
				value: null,
				type: 'string',
				default: null,
				validation: null
			},
			primaryEndpoint: {
				value: null,
				type: 'string',
				default: null,
				validation: null
			},
			secondaryEndpoints: {
				value: null,
				type: 'array',
				default: {
					value: null,
					type: 'string',
					default: null,
					validation: null
				},
				validation: null
			}
		},
		validation: null
	},
	measurement: {
		value: null,
		type: 'object',
		default: {
			statisticalAnalysis: {
				value: null,
				type: 'string',
				default: null,
				validation: null
			}
		},
		validation: null
	},
	conclusion: {
		value: null,
		type: 'object',
		default: {
			summary: {
				value: null,
				type: 'string',
				default: null,
				validation: null
			}
		},
		validation: null
	},
	controlGroups: {
		value: null,
		type: 'array',
		default: {
			name: {
				value: null,
				type: 'string',
				default: null,
				validation: null
			},
			numPatients: {
				value: null,
				type: 'string',
				default: null,
				validation: null
			},
			numMen: {
				value: null,
				type: 'string',
				default: null,
				validation: null
			},
			numWomen: {
				value: null,
				type: 'string',
				default: null,
				validation: null
			},
			methodology: {
				value: null,
				type: 'object',
				default: {
					eligibilityCriteria: {
						value: null,
						type: 'array',
						default: {
							name: {
								value: null,
								type: 'string',
								default: null,
								validation: null
							}, 
							units: {
								value: null,
								type: 'string',
								default: null,
								validation: null
							}, 
							low: {
								value: null,
								type: 'string',
								default: null,
								validation: null
							}, 
							high: {
								value: null,
								type: 'string',
								default: null,
								validation: null
							}
						},
						validation: null
					},
					patientCharacteristics: {
						value: null,
						type: 'array',
						default: {
							name: {
								value: null,
								type: 'string',
								default: null,
								validation: null
							}, 
							units: {
								value: null,
								type: 'string',
								default: null,
								validation: null
							},
							type: null,
							data: null,
							sd: null
						},
						validation: null
					}
				},
				validation: null
			}
		},
		validation: null
	}
};

let newStore = _.extend({}, Backbone.Events, {
	getStudy() {
		return _study;
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
	let key;
	let value;
	
	switch(payload.type) {
		case 'UPDATE_FIELD':
			key = payload.key;
			value = payload.value;
			helpers.storeValue(key.split(':'), value, _study);
			newStore.triggerChange();
			break;
	}
});

export default newStore;

// ,
// 			measurement: {
// 				medications: [{name: undefined, units: undefined, type: undefined, before: {data: undefined, sd: undefined}, after: {data: undefined, sd: undefined}, difference: {data: undefined, sd: undefined}}],
// 				adverseEvents: [{name: undefined, units: undefined, type: undefined, before: {data: undefined, sd: undefined}, after: {data: undefined, sd: undefined}, difference: {data: undefined, sd: undefined}}],
// 				patientData: [{name: undefined, units: undefined, type: undefined, before: {data: undefined, sd: undefined}, after: {data: undefined, sd: undefined}, difference: {data: undefined, sd: undefined}}]
// 			}

// ,
// 	totalData: {
// 		methodology: {
// 			eligibilityCriteria: [{name: undefined, units: undefined, low: undefined, high: undefined}],
// 			patientCharacteristics: [{name: undefined, units: undefined, type: undefined, data: undefined, sd: undefined}]
// 		},
// 		measurement: {
// 			medications: [{name: undefined, units: undefined, type: undefined, before: {data: undefined, sd: undefined}, after: {data: undefined, sd: undefined}, difference: {data: undefined, sd: undefined}}],
// 			adverseEvents: [{name: undefined, units: undefined, type: undefined, before: {data: undefined, sd: undefined}, after: {data: undefined, sd: undefined}, difference: {data: undefined, sd: undefined}}],
// 			patientData: [{name: undefined, units: undefined, type: undefined, before: {data: undefined, sd: undefined}, after: {data: undefined, sd: undefined}, difference: {data: undefined, sd: undefined}}]
// 		}
// 	}