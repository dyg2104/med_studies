const React                   = require('react');

const TextField               = require('../shared/TextField.jsx');
const TextFieldArray          = require('../shared/TextFieldArray.jsx');
const factoryCGTD             = require('../shared/factoryCGTD.jsx');

const EligibilityCriterion    = require('./EligibilityCriterion.jsx');
const PatientCharacteristic   = require('./PatientCharacteristic.jsx');

const ControlGroups           = require('./ControlGroups.jsx');
const EligibilityCriteria     = factoryCGTD(EligibilityCriterion, 'methodology', 'eligibilityCriteria', 'eligibilityCriteria');
const PatientCharacteristics  = factoryCGTD(PatientCharacteristic, 'methodology', 'patientCharacteristics', 'patientCharacteristics');

const uiActions               = require('../../actions/uiActions.es.js');
const findNameSpace           = require('find-namespace-value');

class NewMethodology extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let study = this.props.study;
		let methodology = findNameSpace('methodology', study);
		let controlGroups = findNameSpace('controlGroups', study);
		let totalData = findNameSpace('totalData', study);
		
		return (
			<div>
				<TextField
					formObj={methodology}
					getterKey="diagnosis" 
					setterKeys="methodology:diagnosis" 
					title="Diagnosis" />
				<TextFieldArray 
					formObj={methodology}
					getterKey="design"
					setterKeys="methodology:design" 
					title="Design" />
				<ControlGroups
					formArr={controlGroups}
					setterKeys="controlGroups" />
				<TextField 
					formObj={methodology}
					getterKey="primaryEndpoint" 
					setterKeys="methodology:primaryEndpoint" 
					title="Primary Endpoint" />
				<TextFieldArray 
					formObj={methodology}
					getterKey="secondaryEndpoints"
					setterKeys="methodology:secondaryEndpoints"
					title="Secondary Endpoints" />
				<EligibilityCriteria
					controlGroups={controlGroups}
					totalData={totalData}
					title="Eligibility Criteria" />
				<PatientCharacteristics
					controlGroups={controlGroups}
					totalData={totalData}
					title="Patient Characteristics" />
				<a href="#" onClick={uiActions.previousStep}>Previous</a>
				<a href="#" onClick={uiActions.nextStep}>Next</a>
			</div>
		)
	}
};

export default NewMethodology;