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
	controlGroups: {
		value: null,
		type: 'array',
		default: {
			value: null,
			type: 'object',
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
				}
			},
			validation: null
		},
		validation: null
	},
	methodology: {
		value: null,
		type: 'object',
		default: {
			diagnosis: {
				value: null,
				type: 'string',
				default: null,
				validation: null
			},
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
			},
			eligibilityCriteria: {
				value: null,
				type: 'array',
				default: {
					value: null,
					type: 'object',
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
						controlGroups: {
							value: null,
							type: 'array',
							default: {
								value: null,
								type: 'object',
								default: {
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
							validation: null
						},
						totalData: {
							value: null,
							type: 'object',
							default: {
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
						}
					},
					validation: null
				},
				validation: null
			},
			patientCharacteristics: {
				value: null,
				type: 'array',
				default: {
					value: null,
					type: 'object',
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
						type: {
							value: null,
							type: 'string',
							default: null,
							validation: null
						},
						controlGroups: {
							value: null,
							type: 'array',
							default: {
								value: null,
								type: 'object',
								default: {
									data: {
										value: null,
										type: 'string',
										default: null,
										validation: null
									},
									sd: {
										value: null,
										type: 'string',
										default: null,
										validation: null
									}
								},
								validation: null
							},
							validation: null
						},
						totalData: {
							value: null,
							type: 'object',
							default: {
								data: {
									value: null,
									type: 'string',
									default: null,
									validation: null
								},
								sd: {
									value: null,
									type: 'string',
									default: null,
									validation: null
								}
							},
							validation: null
						}
					},
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
			},
			medications: {
				value: null,
				type: 'array',
				default: {
					value: null,
					type: 'object',
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
						type: {
							value: null,
							type: 'string',
							default: null,
							validation: null
						},
						controlGroups: {
							value: null,
							type: 'array',
							default: {
								value: null,
								type: 'object',
								default: {
									before: {
										value: null,
										type: 'object',
										default: {
											data: {
												value: null,
												type: 'string',
												default: null,
												validation: null
											},
											sd: {
												value: null,
												type: 'string',
												default: null,
												validation: null
											}
										},
										validation: null
									},
									after: {
										value: null,
										type: 'object',
										default: {
											data: {
												value: null,
												type: 'string',
												default: null,
												validation: null
											},
											sd: {
												value: null,
												type: 'string',
												default: null,
												validation: null
											}
										},
										validation: null
									},
									difference: {
										value: null,
										type: 'object',
										default: {
											data: {
												value: null,
												type: 'string',
												default: null,
												validation: null
											},
											sd: {
												value: null,
												type: 'string',
												default: null,
												validation: null
											}
										},
										validation: null
									}
								},
								validation: null
							},
							validation: null
						},
						totalData: {
							value: null,
							type: 'object',
							default: {
								before: {
									value: null,
									type: 'object',
									default: {
										data: {
											value: null,
											type: 'string',
											default: null,
											validation: null
										},
										sd: {
											value: null,
											type: 'string',
											default: null,
											validation: null
										}
									},
									validation: null
								},
								after: {
									value: null,
									type: 'object',
									default: {
										data: {
											value: null,
											type: 'string',
											default: null,
											validation: null
										},
										sd: {
											value: null,
											type: 'string',
											default: null,
											validation: null
										}
									},
									validation: null
								},
								difference: {
									value: null,
									type: 'object',
									default: {
										data: {
											value: null,
											type: 'string',
											default: null,
											validation: null
										},
										sd: {
											value: null,
											type: 'string',
											default: null,
											validation: null
										}
									},
									validation: null
								}
							},
							validation: null
						}
					},
					validation: null
				},
				validation: null
			},
			adverseEvents: {
				value: null,
				type: 'array',
				default: {
					value: null,
					type: 'object',
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
						type: {
							value: null,
							type: 'string',
							default: null,
							validation: null
						},
						controlGroups: {
							value: null,
							type: 'array',
							default: {
								value: null,
								type: 'object',
								default: {
									before: {
										value: null,
										type: 'object',
										default: {
											data: {
												value: null,
												type: 'string',
												default: null,
												validation: null
											},
											sd: {
												value: null,
												type: 'string',
												default: null,
												validation: null
											}
										},
										validation: null
									},
									after: {
										value: null,
										type: 'object',
										default: {
											data: {
												value: null,
												type: 'string',
												default: null,
												validation: null
											},
											sd: {
												value: null,
												type: 'string',
												default: null,
												validation: null
											}
										},
										validation: null
									},
									difference: {
										value: null,
										type: 'object',
										default: {
											data: {
												value: null,
												type: 'string',
												default: null,
												validation: null
											},
											sd: {
												value: null,
												type: 'string',
												default: null,
												validation: null
											}
										},
										validation: null
									}
								},
								validation: null
							},
							validation: null
						},
						totalData: {
							value: null,
							type: 'object',
							default: {
								before: {
									value: null,
									type: 'object',
									default: {
										data: {
											value: null,
											type: 'string',
											default: null,
											validation: null
										},
										sd: {
											value: null,
											type: 'string',
											default: null,
											validation: null
										}
									},
									validation: null
								},
								after: {
									value: null,
									type: 'object',
									default: {
										data: {
											value: null,
											type: 'string',
											default: null,
											validation: null
										},
										sd: {
											value: null,
											type: 'string',
											default: null,
											validation: null
										}
									},
									validation: null
								},
								difference: {
									value: null,
									type: 'object',
									default: {
										data: {
											value: null,
											type: 'string',
											default: null,
											validation: null
										},
										sd: {
											value: null,
											type: 'string',
											default: null,
											validation: null
										}
									},
									validation: null
								}
							},
							validation: null
						}
					},
					validation: null
				},
				validation: null
			},
			patientData: {
				value: null,
				type: 'array',
				default: {
					value: null,
					type: 'object',
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
						type: {
							value: null,
							type: 'string',
							default: null,
							validation: null
						},
						controlGroups: {
							value: null,
							type: 'array',
							default: {
								value: null,
								type: 'object',
								default: {
									before: {
										value: null,
										type: 'object',
										default: {
											data: {
												value: null,
												type: 'string',
												default: null,
												validation: null
											},
											sd: {
												value: null,
												type: 'string',
												default: null,
												validation: null
											}
										},
										validation: null
									},
									after: {
										value: null,
										type: 'object',
										default: {
											data: {
												value: null,
												type: 'string',
												default: null,
												validation: null
											},
											sd: {
												value: null,
												type: 'string',
												default: null,
												validation: null
											}
										},
										validation: null
									},
									difference: {
										value: null,
										type: 'object',
										default: {
											data: {
												value: null,
												type: 'string',
												default: null,
												validation: null
											},
											sd: {
												value: null,
												type: 'string',
												default: null,
												validation: null
											}
										},
										validation: null
									}
								},
								validation: null
							},
							validation: null
						},
						totalData: {
							value: null,
							type: 'object',
							default: {
								before: {
									value: null,
									type: 'object',
									default: {
										data: {
											value: null,
											type: 'string',
											default: null,
											validation: null
										},
										sd: {
											value: null,
											type: 'string',
											default: null,
											validation: null
										}
									},
									validation: null
								},
								after: {
									value: null,
									type: 'object',
									default: {
										data: {
											value: null,
											type: 'string',
											default: null,
											validation: null
										},
										sd: {
											value: null,
											type: 'string',
											default: null,
											validation: null
										}
									},
									validation: null
								},
								difference: {
									value: null,
									type: 'object',
									default: {
										data: {
											value: null,
											type: 'string',
											default: null,
											validation: null
										},
										sd: {
											value: null,
											type: 'string',
											default: null,
											validation: null
										}
									},
									validation: null
								}
							},
							validation: null
						}
					},
					validation: null
				},
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
	}
};

let newStore = _.extend({}, Backbone.Events, {
	getStudy() {
		return _study;
	},
	
	getControlGroupsSize() {
		let size = _study.controlGroups.value ? _study.controlGroups.value.length : 1;
		return size;
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
		//Todo figure out a way to increase the size of everything that relates to a control group at once
		case 'UPDATE_SIZE':
			key = payload.key;
			helpers.increaseSize(key.split(':'), _study);
			newStore.triggerChange();
			break;
	}
});

export default newStore;