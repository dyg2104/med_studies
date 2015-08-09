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
			</div>	
		);
	}
}

export default BackgroundSearchForm;