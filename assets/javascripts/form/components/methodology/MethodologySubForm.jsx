var React                          = require('react');
var StudyActions                   = require('../../actions/StudyActions');
var TextField                      = require('../TextField.jsx');
var TextFieldArray                 = require('../TextFieldArray.jsx');
var ControlGroups                  = require('./ControlGroups.jsx');
var EligibilityCriterion           = require('./EligibilityCriterion.jsx');
var ControlGroupsTotalDataFactory  = require('../ControlGroupsTotalData.jsx');

function ecClickHandler(e) {
	e.preventDefault();
	StudyActions.updateEligibilityCriteriaSize();
}

var EligibilityCriteria = ControlGroupsTotalDataFactory(EligibilityCriterion, 'methodology', 'eligibilityCriteria', ecClickHandler);

var MethodologySubForm = React.createClass({
	render: function () {
		var methodology = this.props.study['methodology'];
		var controlGroups = this.props.study['controlGroups'];
		var totalData = this.props.study['totalData'];
		
		return (
			<div>
				<div>methodology</div>
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
			</div>
		)
	}
});

module.exports = MethodologySubForm;