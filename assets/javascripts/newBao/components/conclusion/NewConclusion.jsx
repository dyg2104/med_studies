const React      = require('react');
const TextArea   = require('../shared/TextArea.jsx');
const uiActions  = require('../../actions/uiActions.es.js');

class NewConclusion extends React.Component {
	constructor(props) {
		super(props);
		this.previousStep = this.previousStep.bind(this);
	}
	
	previousStep() {
		this.context.executeAction(uiActions.previousStep);
	}
	
	render() {
		let study = this.props.study;
		let conclusion;
		
		if (study && study.conclusion) {
			conclusion = study.conclusion.value ? study.conclusion.value : {};
		}
		
		return (
			<div>
				<TextArea 
					formObj={conclusion} 
					getKey="summary"
					setKey="conclusion:summary"
					title="Summary" />
				<a href="#" onClick={this.previousStep}>Previous</a>
			</div>
		);
	}
}

NewConclusion.contextTypes = {
    getStore     : React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired
};

export default NewConclusion;