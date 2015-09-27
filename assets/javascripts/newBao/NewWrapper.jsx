const React        = require('react');

const Background   = require('./components/background/NewBackground.jsx');
const Methodology  = require('./components/methodology/NewMethodology.jsx');
const Measurement  = require('./components/measurement/NewMeasurement.jsx');
const Conclusion   = require('./components/conclusion/NewConclusion.jsx');

const uiActions    = require('./actions/uiActions.es.js');

class NewWrapper extends React.Component {
	constructor(props) {
		super(props);	
		
		this.goToBackground = this.goToBackground.bind(this);
		this.goToMethodology = this.goToMethodology.bind(this);
		this.goToMeasurement = this.goToMeasurement.bind(this);
		this.goToConclusion = this.goToConclusion.bind(this);
	}	
	
	goToBackground() {
		this.context.executeAction(uiActions.goToBackground);
	}
	
	goToMethodology() {
		this.context.executeAction(uiActions.goToMethodology);	
	}
	
	goToMeasurement() {
		this.context.executeAction(uiActions.goToMeasurement);
	}
	
	goToConclusion() {
		this.context.executeAction(uiActions.goToConclusion);
	}
	
	render() {
		let props = this.props;
		let subForm;
		
		switch(props.step) {
			case 1:
				subForm = <Background study={props.study} />;
				break;
			case 2:
				subForm = <Methodology study={props.study} />;
				break;
			case 3:
				subForm = <Measurement study={props.study} />;
				break;
			case 4:
				subForm = <Conclusion study={props.study} />;
				break;
		}
		
		return (
			<div>
				<div>
					<div>
						<a href="#" onClick={this.goToBackground}>Background</a>
					</div>
					<div>
						<a href="#" onClick={this.goToMethodology}>Methodology</a>
					</div>
					<div>
						<a href="#" onClick={this.goToMeasurement}>Measurement</a>
					</div>
					<div>
						<a href="#" onClick={this.goToConclusion}>Conclusion</a>
					</div>
				</div>
				<div>
					{subForm}
				</div>
			</div>
		);
		
	}
}

NewWrapper.contextTypes = {
    getStore     : React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired
};

export default NewWrapper;