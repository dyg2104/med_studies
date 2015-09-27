const BaseStore  = require('fluxible/addons/BaseStore');
const helpers    = require('./newStoreHelpers.es.js');

class NewStore extends BaseStore {
	constructor(dispatcher) {
		super(dispatcher);
		
		this._study = window.study = {
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
	}
	
	getStudy() {
		return this._study;
	}
	
	getControlGroupsSize() {
		let size = this._study.controlGroups.value ? this._study.controlGroups.value.length : 1;
		return size;
	}
	
	updateField(payload, actionName) {
		let key = payload.key;
		let value = payload.value;
		helpers.storeValue(key.split(':'), value, this._study);
		this.emit('change');
	}
	
	updateSize(payload, actionName) {
		let key = payload.key;
		helpers.increaseSize(key.split(':'), this._study);
		this.emit('change');
	}
}

NewStore.storeName = 'NewStore';
NewStore.handlers = {
	'UPDATE_FIELD': 'updateField',
	'UPDATE_SIZE': 'updateSize'
}

export default NewStore;