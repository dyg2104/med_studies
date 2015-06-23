var React           = require('react');
var TextField       = require('../TextField.jsx');
var TextFieldArray  = require('../TextFieldArray.jsx');

var BackgroundSubForm = React.createClass({	
	render: function () {	
		return (
			<div>
				<div>background</div>
			    <TextField
					keys="title" 
					title="Title" />
				<TextFieldArray
					keys="authors" 
					title="Authors" />
				<TextField
					keyName="description" 
					title="Description" />
				<TextField
					keyName="diseaseName" 
					title="Disease Name" />
				<TextFieldArray
					keyName="diseaseComplications" 
					title="Complications" />
				<TextFieldArray  
					keyName="diseaseCurrentTreatments" 
					title="Current Treatments" />
			 	<TextFieldArray
					keyName="trials" 
					title="Trials" />
				<TextFieldArray
					keyName="involvedParties" 
					title="Involved Parties" />
				<TextFieldArray
					keyName="references" 
					title="References" />
				<a href="#" onClick={this.props.nextStep}>Next</a>
			</div>
		)
	}
});

module.exports = BackgroundSubForm;