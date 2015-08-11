const React      = require('react');
const TextField  = require('../TextField.jsx');

class ConclusionSearchForm extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<div>
				Conclusion Search Form
				<TextField
					formObj={this.props.formObj}
					getterKey="summary"
					setterKey="summary"
					title="Summary" />
			</div>	
		);
	}
}

export default ConclusionSearchForm;