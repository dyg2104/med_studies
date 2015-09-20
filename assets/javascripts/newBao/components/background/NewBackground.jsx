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
					title="Title"/>
				<TextFieldArray
					formObj={study}
					getKey="authors"
					setKey="authors"
					title="Authors" />
					
			<a href="#" onClick={uiActions.nextStep}>Next</a>
			</div>
		);
	}
}

export default NewBackground;