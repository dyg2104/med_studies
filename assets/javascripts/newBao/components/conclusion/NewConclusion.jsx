const React = require('react');

class NewConclusion extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>Conclusion</div>
		);
	}
}

NewConclusion.contextTypes = {
    getStore     : React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired
};

export default NewConclusion;