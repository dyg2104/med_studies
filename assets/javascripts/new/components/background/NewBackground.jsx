const React           = require('react');
const TextField       = require('../shared/TextField.jsx');
const TextFieldArray  = require('../shared/TextFieldArray.jsx');
const uiActions       = require('../../actions/uiActions.es.js');

class NewBackground extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {	
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
				<a href="#" onClick={uiActions.nextStep}>Next</a>
			</div>
		)
	}
}

export default NewBackground;