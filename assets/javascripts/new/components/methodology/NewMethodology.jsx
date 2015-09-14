const React                   = require('react');

const TextField               = require('../shared/TextField.jsx');
const TextFieldArray          = require('../shared/TextFieldArray.jsx');
const factoryCGTD             = require('../shared/factoryCGTD.jsx');

const EligibilityCriterion    = require('./EligibilityCriterion.jsx');
const PatientCharacteristic   = require('./PatientCharacteristic.jsx');
const handlers                = require('./clickHandlers');

const ControlGroups           = require('./ControlGroups.jsx');
const EligibilityCriteria     = factoryCGTD(EligibilityCriterion, 'methodology', 'eligibilityCriteria', handlers.eligibilityCriteria);
const PatientCharacteristics  = factoryCGTD(PatientCharacteristic, 'methodology', 'patientCharacteristics', handlers.patientCharacteristics);

const uiActions               = require('../../actions/uiActions.es.js');

var NewMethodology = React.createClass({
	render: function () {
		var methodology = this.props.study['methodology'];
		var controlGroups = this.props.study['controlGroups'];
		var totalData = this.props.study['totalData'];
		
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
					setterKeys="controlGroups"
					title="Control Groups" />
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
});

module.exports = NewMethodology;