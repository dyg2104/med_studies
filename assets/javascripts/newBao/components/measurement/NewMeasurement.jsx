const React = require('react');

class NewMeasurement extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<div>Measurement</div>
		);
	}
}

NewMeasurement.contextTypes = {
    getStore     : React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired
};


export default NewMeasurement;