var React                = require('react');
var TextField            = require('../TextField.jsx');
var TextFieldArray       = require('../TextFieldArray.jsx');
var ControlGroups        = require('./ControlGroups.jsx');
// var EligibilityCriteria  = require('./EligibilityCriteria.jsx');

var MethodologySubForm = React.createClass({
	render: function () {
		var methodology = this.props.study['methodology'];
		var controlGroups = this.props.study['controlGroups'];
		
		return (
			<div>
				<div>methodology</div>
				<TextField 
					formObj={methodology}
					getterKey="diagnosis" 
					setterKeys="diagnosis" 
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
					setterKeys="primaryEndpoint" 
					title="Primary Endpoint" />
				<TextFieldArray 
					formObj={methodology}
					getterKey="secondaryEndpoints"
					setterKeys="secondaryEndpoints"
					title="Secondary Endpoints" />
			</div>
		)
	}
});

module.exports = MethodologySubForm;