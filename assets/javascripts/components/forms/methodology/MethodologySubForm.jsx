var React           = require('react');
var TextField       = require('./TextField.jsx');
var TextFieldArray  = require('./TextFieldArray.jsx');
var ControlGroups   = require('./ControlGroups.jsx');

var MethodologySubForm = React.createClass({
	getMethodology: function () {
		var study = this.props.getStudy();
		study['methodology'] = study['methodology'] || {};
		return study['methodology'];
	},
	
	render: function () {
		return (
			<div>
				<div>methodology</div>
				<TextFieldArray getFormObj={this.getMethodology} keyName="design" title="Design" />
				<TextField getFormObj={this.getMethodology} keyName="diagnosis" title="Diagnosis" />
			    <ControlGroups getFormObj={this.props.getStudy} keyName="controlGroups" title="Control Groups" />
			</div>
		)
	}
});

module.exports = MethodologySubForm;