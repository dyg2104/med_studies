var React           = require('react');
var TextField       = require('../TextField.jsx');
var TextFieldArray  = require('../TextFieldArray.jsx');

var BackgroundSubForm = React.createClass({	
	render: function () {	
		return (
			<div>
				<div>background</div>
			    <TextField
					formObj={this.props.study}
					keys="title" 
					title="Title" />
				<TextFieldArray
					formObj={this.props.study}
					keys="authors" 
					title="Authors" />
				<TextField
					formObj={this.props.study}
					keys="description" 
					title="Description" />
				<TextField
					formObj={this.props.study}
					keys="diseaseName" 
					title="Disease Name" />
				<TextFieldArray
					formObj={this.props.study}
					keys="complications" 
					title="Complications" />
				<TextFieldArray  
					formObj={this.props.study}
					keys="currentTreatments" 
					title="Current Treatments" />
			 	<TextFieldArray
					formObj={this.props.study}
					keys="trials" 
					title="Trials" />
				<TextFieldArray
					formObj={this.props.study}
					keys="involvedParties" 
					title="Involved Parties" />
				<TextFieldArray
					formObj={this.props.study}
					keys="references" 
					title="References" />
				<a href="#" onClick={this.props.nextStep}>Next</a>
			</div>
		)
	}
});

module.exports = BackgroundSubForm;