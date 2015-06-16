var React           = require('react');
var TextField       = require('./TextField.jsx');
var TextFieldArray  = require('./TextFieldArray.jsx');

var BackgroundSubForm = React.createClass({	
	render: function () {	
		return (
			<div>
				<div>background</div>
			    <TextField getFormObj={this.props.getStudy} keyName="title" title="Title" />
				<TextFieldArray getFormObj={this.props.getStudy} keyName="authors" title="Authors" />
				<TextField getFormObj={this.props.getStudy} keyName="description" title="Description" />
				<TextField getFormObj={this.props.getStudy} keyName="diseaseName" title="Disease Name" />
				<TextFieldArray getFormObj={this.props.getStudy} keyName="diseaseComplications" title="Complications" />
				<TextFieldArray getFormObj={this.props.getStudy} keyName="diseaseCurrentTreatments" title="Current Treatments" />
			 	<TextFieldArray getFormObj={this.props.getStudy} keyName="trials" title="Trials" />
				<TextFieldArray getFormObj={this.props.getStudy} keyName="involvedParties" title="Involved Parties" />
				<TextFieldArray getFormObj={this.props.getStudy} keyName="trials" title="Trials" />
				<a href="#" onClick={this.props.nextStep}>Next</a>
			</div>
		)
	}
});

module.exports = BackgroundSubForm;