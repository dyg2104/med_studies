const React           = require('react');
const TextField       = require('../shared/TextField.jsx');
const TextFieldArray  = require('../shared/TextFieldArray.jsx');
const uiActions       = require('../../actions/uiActions.es.js');

class NewBackground extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let study = this.props.study;
		
		return (
			<div>
				<TextField 
					formObj={study}
					getKey="title"
					setKey="title"
					title="Title" />
				<TextFieldArray
					formObj={study}
					getKey="authors"
					setKey="authors"
					title="Authors" />
				<TextField
					formObj={study}
					getKey="description" 
					setKey="description" 
					title="Description" />
				<TextField
					formObj={study}
					getKey="diseaseName" 
					setKey="diseaseName" 
					title="Disease Name" />
				<TextFieldArray
					formObj={study}
					getKey="complications"
					setKey="complications"
					title="Complications" />
				<TextFieldArray
					formObj={study}
					getKey="currentTreatments"
					setKey="currentTreatments"
					title="Current Treatments" />
			 	<TextFieldArray
					formObj={study}
					getKey="trials" 
					setKey="trials" 
					title="Trials" />
				<TextFieldArray
					formObj={study}
					getKey="involvedParties" 
					setKey="involvedParties" 
					title="Involved Parties" />
				<TextFieldArray
					formObj={study}
					getKey="references" 
					setKey="references" 
					title="References" />
			<a href="#" onClick={uiActions.nextStep}>Next</a>
			</div>
		);
	}
}

export default NewBackground;