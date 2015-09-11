const React           = require('react');
const TextValue       = require('../TextValue.jsx');
const TextArrayValue  = require('../TextArrayValue.jsx');

class ShowBackground extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let study = this.props.study;
		let disease = study.disease;
		
		return (
			<div>
				<TextValue
					formObj={study}
					getterKey="title"
					title="Title" />
				<TextArrayValue
					formObj={study}
					getterKey="authors"
					title="Authors" />
				<TextValue
					formObj={study}
					getterKey="description"
					title="Description" />
				<TextValue
					formObj={disease}
					getterKey="name"
					title="Disease Name" />
				<TextArrayValue
					formObj={disease}
					getterKey="complications"
					title="Complications" />
				<TextArrayValue
					formObj={disease}
					getterKey="current_treatments"
					title="Current Treatments" />
				<TextArrayValue
					formObj={study}
					getterKey="trials"
					title="Trials" />
				<TextArrayValue
					formObj={study}
					getterKey="involved_parties"
					title="Involved Parties" />
				<TextArrayValue
					formObj={study}
					getterKey="references"
					title="References" />
			</div>
		);
	}
}

export default ShowBackground;