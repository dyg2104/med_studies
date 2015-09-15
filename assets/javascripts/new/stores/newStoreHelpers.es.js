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
}


function getEligibilityCriteria() {
	return {
		name: undefined, 
		units: undefined, 
		low: undefined, 
		high: undefined
	};
}

function getPatientCharacteristics() {
	return {
		name: undefined, 
		units: undefined, 
		type: undefined, 
		data: undefined, 
		sd: undefined
	};
}

function getMeasurementData() {
	return {
		name: undefined, 
		units: undefined, 
		type: undefined, 
		before: {data: undefined, sd: undefined}, 
		after: {data: undefined, sd: undefined}, 
		difference: {data: undefined, sd: undefined}
	};
}

let helpers = {
	storeValue(keys, value, store) {
		let key = keys.shift();
		let storeHolder;
		
		if (/\d+/.test(key)) {
			key = parseInt(key);
		}
		
		if (keys.length === 0) {
			store[key] = value;
		} else {
			storeHolder = store[key];
			this.storeValue(keys, value, storeHolder);
		}
	},
	
	storeCGTDValue(keys, value, store) {
		let controlGroups = store['controlGroups'];
		let holder;
		
		for (let i = 0; i < controlGroups.length; i++) {
			holder = 'controlGroups:' + i + ':' + keys;
			this.storeValue(holder.split(':'), value, store);
		}
		
		holder = 'totalData:' + keys;
		this.storeValue(holder.split(':'), value, store);
	},
	
	pushArray(keys, store) {
		let key = keys.shift();
		let array;
		let storeHolder;
	
		if (keys.length === 0) {
			array = store[key];
			array.push('');
		} else {
			storeHolder = store[key];
			this.pushArray(keys, storeHolder);
		}
	},
	
	pushControlGroup(store) {
		let controlGroups = store['controlGroups'];
		let controlGroup = getControlGroup(store);
		
		controlGroups.push(controlGroup);
	},
	
	pushEligibilityCriteria(store) {
		let controlGroups = store['controlGroups'];
		let totalData = store['totalData'];
	
		for (let i = 0; i < controlGroups.length; i++) {
			controlGroups[i]['methodology']['eligibilityCriteria'].push(getEligibilityCriteria());
		}
	
		totalData['methodology']['eligibilityCriteria'].push(getEligibilityCriteria());
	},
	
	pushPatientCharacteristics(store) {
		let controlGroups = store['controlGroups'];
		let totalData = store['totalData'];
	
		for (let i = 0; i < controlGroups.length; i++) {
			controlGroups[i]['methodology']['patientCharacteristics'].push(getPatientCharacteristics());
		}
	
		totalData['methodology']['patientCharacteristics'].push(getPatientCharacteristics());
	},
	
	pushMeasurementData(keys, store) {
		let controlGroups = store['controlGroups'];
		let totalData = store['totalData'];
		
		let firstKey = keys[0];
		let secondKey = keys[1];
		
		for (let i = 0; i < controlGroups.length; i++) {
			controlGroups[i][firstKey][secondKey].push(getMeasurementData());
		}
		
		totalData[firstKey][secondKey].push(getMeasurementData());
	}
};

export default helpers;