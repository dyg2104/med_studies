const React      = require('react');
const TextField  = require('../TextField.jsx');

class MeasurementSearchForm extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<div>
				Measurement Search Form
				<TextField
					formObj={this.props.formObj}
					getterKey="diagnosis"
					setterKey="diagnosis"
					title="Diagnosis" />
			</div>	
		);
	}
}

export default MeasurementSearchForm;