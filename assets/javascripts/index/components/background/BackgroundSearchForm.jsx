const React      = require('react');
const TextField  = require('../TextField.jsx');

class BackgroundSearchForm extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<div>
				Background Search Form
				<TextField
					formObj={this.props.formObj}
					getterKey="title"
					setterKey="title"
					title="Title" />
				<TextField
					formObj={this.props.formObj}
					getterKey="authors"
					setterKey="authors"
					title="Authors" />
				<TextField
					formObj={this.props.formObj}
					getterKey="description"
					setterKey="description"
					title="Description" />
				<TextField
					formObj={this.props.formObj}
					getterKey="diseaseName"
					setterKey="diseaseName"
					title="Disease Name" />
				<TextField
					formObj={this.props.formObj}
					getterKey="complications"
					setterKey="complications"
					title="Complications" />
				<TextField
					formObj={this.props.formObj}
					getterKey="currentTreatments"
					setterKey="currentTreatments"
					title="Current Treatments" />
				<TextField
					formObj={this.props.formObj}
					getterKey="trials"
					setterKey="trials"
					title="Trials" />
				<TextField
					formObj={this.props.formObj}
					getterKey="involvedParties"
					setterKey="involvedParties"
					title="Involved Parties" />
				<TextField
					formObj={this.props.formObj}
					getterKey="references"
					setterKey="references"
					title="References" />
			</div>	
		);
	}
}

export default BackgroundSearchForm;