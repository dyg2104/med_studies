var React           = require('react');
var TextField       = require('./TextField.jsx');
var TextFieldArray  = require('./TextFieldArray.jsx');

var BackgroundSubForm = React.createClass({
	getFormObj: function () {
		var formObj = this.props.getStudy();
		return formObj;
	},
	
	render: function () {
		
		return (
			<div>
				<div>background</div>
			    <TextField getFormObj={this.getFormObj} keyName="title" title="Title" />
				<TextFieldArray getFormObj={this.getFormObj} keyName="authors" title="Authors" />
				<TextField getFormObj={this.getFormObj} keyName="description" title="Description" />
				<TextField getFormObj={this.getFormObj} keyName="diseaseName" title="Disease Name" />
				<TextFieldArray getFormObj={this.getFormObj} keyName="diseaseComplications" title="Complications" />
				<TextFieldArray getFormObj={this.getFormObj} keyName="diseaseCurrentTreatments" title="Current Treatments" />
			 	<TextFieldArray getFormObj={this.getFormObj} keyName="trials" title="Trials" />
				<TextFieldArray getFormObj={this.getFormObj} keyName="involvedParties" title="Involved Parties" />
				<TextFieldArray getFormObj={this.getFormObj} keyName="trials" title="Trials" />
				<a href="#" onClick={this.props.nextStep}>Next</a>
			</div>
		)
	}
});

module.exports = BackgroundSubForm;