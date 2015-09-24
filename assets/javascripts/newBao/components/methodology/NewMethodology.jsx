const React                 = require('react');

const TextField             = require('../shared/TextField.jsx');
const TextFieldArray        = require('../shared/TextFieldArray.jsx');
const factoryCollection     = require('../shared/factoryCollection.jsx');

const ControlGroup          = require('./ControlGroup.jsx');
const EligibilityCriterion  = require('./EligibilityCriterion.jsx');

const ControlGroups         = factoryCollection(ControlGroup);
const EligibilityCriteria   = factoryCollection(EligibilityCriterion);

const uiActions             = require('../../actions/uiActions.es.js');

class NewMethodology extends React.Component {
	constructor(props) {
		super(props);
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
				
					
				<a href="#" onClick={uiActions.previousStep}>Previous</a>
				<a href="#" onClick={uiActions.nextStep}>Next</a>
			</div>
		);
	}
}

export default NewMethodology;