const React                   = require('react');

const TextValue               = require('../shared/TextValue.jsx');
const TextArrayValue          = require('../shared/TextArrayValue.jsx');
const factoryCGTD             = require('../shared/factoryCGTD.jsx');

const ControlGroups           = require('./ControlGroups.jsx');
const EligibilityCriteria     = require('./EligibilityCriteria.jsx');
const PatientCharacteristic   = require('./PatientCharacteristic.jsx');

const PatientCharacteristics  = factoryCGTD(PatientCharacteristic, 'methodology.patientCharacteristics');

const findNameSpace           = require('find-namespace-value');

class ShowMethodology extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let study = this.props.study;
		let methodology = findNameSpace('methodology', study);
		let controlGroups = findNameSpace('control_groups', study);
		let totalData = findNameSpace('total_datum', study);
		
		return (
			<div>
				<TextValue 
					formObj={methodology} 
					getterKey="diagnosis"
					title="Diagnosis" />
				<TextValue 
					formObj={methodology} 
					getterKey="design"
					title="Design" />
				<ControlGroups 
					formArr={controlGroups} />
				<TextValue 
					formObj={methodology} 
					getterKey="primary_endpoint"
					title="Primary Endpoint" />
				<TextArrayValue 
					formObj={methodology} 
					getterKey="secondary_endpoints" 
					title="Secondary Endpoints"/>
				<EligibilityCriteria 
					controlGroups={controlGroups}
					totalData={totalData} />
				<PatientCharacteristics 
					controlGroups={controlGroups}
					totalData={totalData}
					title="Patient Characteristics" />
			</div>
		);
	}
}

export default ShowMethodology;