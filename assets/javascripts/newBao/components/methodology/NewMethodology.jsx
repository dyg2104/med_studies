const React                   = require('react');

const TextField               = require('../shared/TextField.jsx');
const TextFieldArray          = require('../shared/TextFieldArray.jsx');
const factoryCollection       = require('../shared/factoryCollection.jsx');

const ControlGroup            = require('./ControlGroup.jsx');
const EligibilityCriterion    = require('./EligibilityCriterion.jsx');
const PatientCharacteristic   = require('./PatientCharacteristic.jsx');

const ControlGroups           = factoryCollection(ControlGroup);
const EligibilityCriteria     = factoryCollection(EligibilityCriterion);
const PatientCharacteristics  = factoryCollection(PatientCharacteristic);

const uiActions               = require('../../actions/uiActions.es.js');

class NewMethodology extends React.Component {
	constructor(props) {
		super(props);
		
		this.previousStep = this.previousStep.bind(this);
		this.nextStep = this.nextStep.bind(this);
	}
	
	previousStep() {
		this.context.executeAction(uiActions.previousStep);
	}
	
	nextStep() {
		this.context.executeAction(uiActions.nextStep);
	}
	
	render() {
		let study = this.props.study;
		let methodology;
		
		if (study && study.methodology) {
			methodology = study.methodology.value ? study.methodology.value : {};
		}
		
		return (
			<div>
				<TextField
					formObj={methodology}
					getKey="diagnosis" 
					setKey="methodology:diagnosis" 
					title="Diagnosis" />
				<TextFieldArray 
					formObj={methodology}
					getKey="design"
					setKey="methodology:design" 
					title="Design" />
				<ControlGroups
					formObj={study}
					getKey="controlGroups"
					setKey="controlGroups"
					title="Control Groups" />
				<TextField 
					formObj={methodology}
					getKey="primaryEndpoint"
					setKey="methodology:primaryEndpoint" 
					title="Primary Endpoint" />
				<TextFieldArray 
					formObj={methodology}
					getKey="secondaryEndpoints"
					setKey="methodology:secondaryEndpoints"
					title="Secondary Endpoints" />
				<EligibilityCriteria 
					formObj={methodology}
					getKey="eligibilityCriteria"
					setKey="methodology:eligibilityCriteria"
					title="Eligibility Criteria" />
				<PatientCharacteristics 
					formObj={methodology} 
					getKey="patientCharacteristics"
					setKey="methodology:patientCharacteristics"
					title="Patient Characteristics" />
				<a href="#" onClick={this.previousStep}>Previous</a>
				<a href="#" onClick={this.nextStep}>Next</a>
			</div>
		);
	}
}

NewMethodology.contextTypes = {
    getStore     : React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired
};

export default NewMethodology;