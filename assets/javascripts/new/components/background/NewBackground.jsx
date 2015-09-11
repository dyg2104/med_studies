var React           = require('react');
var TextField       = require('../shared/TextField.jsx');
var TextFieldArray  = require('../shared/TextFieldArray.jsx');

var NewBackground = React.createClass({	
	render: function () {	
		return (
			<div>
			    <TextField
					formObj={this.props.study}
					getterKey="title" 
					setterKeys="title"
					title="Title" />
				<TextFieldArray
					formObj={this.props.study}
					getterKey="authors"
					setterKeys="authors"
					title="Authors" />
				<TextField
					formObj={this.props.study}
					getterKey="description" 
					setterKeys="description" 
					title="Description" />
				<TextField
					formObj={this.props.study}
					getterKey="diseaseName" 
					setterKeys="diseaseName" 
					title="Disease Name" />
				<TextFieldArray
					formObj={this.props.study}
					getterKey="complications"
					setterKeys="complications"
					title="Complications" />
				<TextFieldArray
					formObj={this.props.study}
					getterKey="currentTreatments"
					setterKeys="currentTreatments"
					title="Current Treatments" />
			 	<TextFieldArray
					formObj={this.props.study}
					getterKey="trials" 
					setterKeys="trials" 
					title="Trials" />
				<TextFieldArray
					formObj={this.props.study}
					getterKey="involvedParties" 
					setterKeys="involvedParties" 
					title="Involved Parties" />
				<TextFieldArray
					formObj={this.props.study}
					getterKey="references" 
					setterKeys="references" 
					title="References" />
				<a href="#" onClick={this.props.nextStep}>Next</a>
			</div>
		)
	}
});

module.exports = NewBackground;