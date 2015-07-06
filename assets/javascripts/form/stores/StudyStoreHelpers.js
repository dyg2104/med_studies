function getControlGroup(store) {
	var criteria = [];
	var characteristics = [];
	var medications = [];
	var adverseEvents = [];
	var patientData = [];
	
	for (var i = 0; i < store['totalData']['methodology']['eligibilityCriteria'].length; i++) {
		criteria.push({name: undefined, units: undefined, low: undefined, high: undefined});
	}
	
	for (var j = 0; j < store['totalData']['methodology']['patientCharacteristics'].length; j++) {
		characteristics.push({name: undefined, units: undefined, type: undefined, data: undefined, sd: undefined});
	}
	
	for (var k = 0; k < store['totalData']['measurement']['medications'].length; k++) {
		medications.push({name: undefined, units: undefined, type: undefined, before: {data: undefined, sd: undefined}, after: {data: undefined, sd: undefined}, difference: {data: undefined, sd: undefined}});
	}
	
	for (var l = 0; l < store['totalData']['measurement']['adverseEvents'].length; l++) {
		adverseEvents.push({name: undefined, units: undefined, type: undefined, before: {data: undefined, sd: undefined}, after: {data: undefined, sd: undefined}, difference: {data: undefined, sd: undefined}});
	}
	
	for (var m = 0; m < store['totalData']['measurement']['patientData'].length; m++) {
		patientData.push({name: undefined, units: undefined, type: undefined, before: {data: undefined, sd: undefined}, after: {data: undefined, sd: undefined}, difference: {data: undefined, sd: undefined}});
	}
	
	return {
		name: undefined, 
		numPatients: undefined, 
		numMen: undefined, 
		numWomen: undefined,
		methodology: {
			eligibilityCriteria: criteria,
			patientCharacteristics: characteristics
		},
		measurement: {
			medications: medications,
			adverseEvents: adverseEvents,
			patientData: patientData
		}
	};
};


function getEligibilityCriteria() {
	return {
		name: undefined, 
		units: undefined, 
		low: undefined, 
		high: undefined
	};
};

function getPatientCharacteristics() {
	return {
		name: undefined, 
		units: undefined, 
		type: undefined, 
		data: undefined, 
		sd: undefined
	};
};

module.exports = {
	storeValue: function(keys, value, store) {
		var key = keys.shift();
		var storeHolder;
	
		if (keys.length === 0) {
			if (/\d+/.test(key)) {
				key = parseInt(key);
			}
			store[key] = value;
		} else {
			storeHolder = store[key];
			this.storeValue(keys, value, storeHolder);
		}
	},
	
	pushArray: function(keys, store) {
		var key = keys.shift();
		var array;
		var storeHolder;
	
		if (keys.length === 0) {
			array = store[key];
			array.push('');
		} else {
			storeHolder = store[key];
			this.pushArray(keys, storeHolder);
		}
	},
	
	pushControlGroup: function(keys, store) {
		var key = keys.shift();
		var array = store[key];
		var controlGroup = getControlGroup(store);
		
		array.push(controlGroup);
	},
	
	pushEligibilityCriteria: function() {
		var controlGroups = _study['controlGroups'];
		var totalData = _study['totalData'];
	
		for (var i = 0; i < controlGroups.length; i++) {
			controlGroups[i]['methodology']['eligibilityCriteria'].push(getEligibilityCriteria());
		}
	
		totalData['methodology']['eligibilityCriteria'].push(getEligibilityCriteria());
	},
	
	pushPatientCharacteristics: function() {
		var controlGroups = _study['controlGroups'];
		var totalData = _study['totalData'];
	
		for (var i = 0; i < controlGroups.length; i++) {
			controlGroups[i]['methodology']['patientCharacteristics'].push(getPatientCharacteristics());
		}
	
		totalData['methodology']['patientCharacteristics'].push(getPatientCharacteristics());
	}
};