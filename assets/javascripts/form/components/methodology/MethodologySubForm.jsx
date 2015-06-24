var React                = require('react');
var TextField            = require('../TextField.jsx');
var TextFieldArray       = require('../TextFieldArray.jsx');
// var ControlGroups        = require('./ControlGroups.jsx');
// var EligibilityCriteria  = require('./EligibilityCriteria.jsx');

var MethodologySubForm = React.createClass({
	render: function () {
		var methodology = this.props.study['methodology'];
		
		return (
			<div>
				<div>methodology</div>
				<TextFieldArray 
					formObj={methodology}
					getterKey="design"
					setterKeys="methodology:design" 
					title="Design" />
				<TextField 
					formObj={methodology}
					getterKey="diagnosis" 
					setterKeys="diagnosis" 
					title="Diagnosis" />
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