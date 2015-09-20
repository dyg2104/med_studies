const React           = require('react');

const TextField       = require('../shared/TextField.jsx');
const TextFieldArray  = require('../shared/TextFieldArray.jsx');

const uiActions       = require('../../actions/uiActions.es.js');

class NewMethodology extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let study = this.props.study;
		let methodology;
		let controlGroups;
		let totalData;
		
		if (study && study.methodology) {
			methodology = study.methodology.value ? study.methodology.value : {};
		}
		
		if (study && study.controlGroups) {
			controlGroups = study.controlGroups.value ? study.controlGroups.value : {};
		}
		
		if (study && study.totalData) {
			totalData = study.totalData.value ? study.totalData.value : {};
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
				
					
				<a href="#" onClick={uiActions.previousStep}>Previous</a>
				<a href="#" onClick={uiActions.nextStep}>Next</a>
			</div>
		);
	}
}

export default NewMethodology;