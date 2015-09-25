const React                = require('react');
const BaseComponent        = require('../shared/BaseComponent.jsx');
const TextField            = require('../shared/TextField.jsx');
const factoryCGCollection  = require('../shared/factoryCGCollection.jsx');

const DataSD               = require('../shared/DataSD.jsx');
const DataSDs              = factoryCGCollection(DataSD);

class PatientCharacteristic extends BaseComponent {
	constructor(props) {
		super(props);
	}
	
	render() {
		let patientCharacteristic = this.getValue();
		let setKey = this.getSetKey();
		
		return(
			<div>
				<TextField 
					formObj={patientCharacteristic}
					getKey="name"
					parentSetKey={setKey}
					setKey="name"
					title="Name" />
				<TextField 
					formObj={patientCharacteristic}
					getKey="units"
					parentSetKey={setKey}
					setKey="units"
					title="Units" />
				<TextField 
					formObj={patientCharacteristic}
					getKey="type"
					parentSetKey={setKey}
					setKey="type"
					title="Type" />				
			</div>
		);
	}
}

export default PatientCharacteristic;