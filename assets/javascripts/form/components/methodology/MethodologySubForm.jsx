var React                  = require('react');
var TextField              = require('../TextField.jsx');
var TextFieldArray         = require('../TextFieldArray.jsx');
var ControlGroups          = require('./ControlGroups.jsx');
var EligibilityCriterion   = require('./EligibilityCriterion.jsx');
var PatientCharacteristic  = require('./PatientCharacteristic.jsx');
var FactoryCGTD            = require('../FactoryCGTD.jsx');
var handlers               = require('./clickHandlers');

var EligibilityCriteria = FactoryCGTD(EligibilityCriterion, 'methodology', 'eligibilityCriteria', handlers.eligibilityCriteria);
var PatientCharacteristics = FactoryCGTD(PatientCharacteristic, 'methodology', 'patientCharacteristics', handlers.patientCharacteristics);

var MethodologySubForm = React.createClass({
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
				<a href="#" onClick={this.props.previousStep}>Previous</a>
				<a href="#" onClick={this.props.nextStep}>Next</a>
			</div>
		)
	}
});

module.exports = MethodologySubForm;