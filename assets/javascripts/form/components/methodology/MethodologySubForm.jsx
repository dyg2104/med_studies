var React                = require('react');
var TextField            = require('../TextField.jsx');
var TextFieldArray       = require('../TextFieldArray.jsx');
var ControlGroups        = require('./ControlGroups.jsx');
var EligibilityCriteria  = require('./EligibilityCriteria.jsx');

var MethodologySubForm = React.createClass({
	getMethodology: function () {
		var study = this.props.getStudy();
		study['methodology'] = study['methodology'] || {};
		return study['methodology'];
	},
	
	getControlGroups: function () {
		var study = this.props.getStudy();
		study['controlGroups'] = study['controlGroups'] || [{}];
		return study['controlGroups'];	
	},
	
	getTotalData: function () {
		var study = this.props.getStudy();
		study['totalData'] = study['totalData'] || {};
		return study['totalData'];	
	},
	
	render: function () {
		return (
			<div>
				<div>methodology</div>
				<TextFieldArray getFormObj={this.getMethodology} 
					keyName="design" 
					title="Design" />
				<TextField getFormObj={this.getMethodology} 
					keyName="diagnosis" 
					title="Diagnosis" />
			    <ControlGroups getFormArray={this.getControlGroups} 
					keyName="controlGroups" 
					title="Control Groups" />
				<TextField getFormObj={this.getMethodology} 
					keyName="primaryEndpoint" 
					title="Primary Endpoint" />
				<TextFieldArray getFormObj={this.getMethodology} 
					keyName="secondaryEndpoints" 
					title="Secondary Endpoints" />
				<EligibilityCriteria getControlGroups={this.getControlGroups}
					getTotalData={this.getTotalData} />
			</div>
		)
	}
});

module.exports = MethodologySubForm;