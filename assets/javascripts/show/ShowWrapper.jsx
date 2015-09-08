const React        = require('react');
const Background   = require('./components/ShowBackground.jsx');
const Methodology  = require('./components/methodology/ShowMethodology.jsx');
const Measurement  = require('./components/ShowMeasurement.jsx');
const Conclusion   = require('./components/ShowConclusion.jsx');
const ShowStore    = require('./stores/ShowStore.es.js');

class ShowWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			study: ShowStore.getStudy()
		};
		
		this.goToBackground = this.goToBackground.bind(this);
		this.goToMethodology = this.goToMethodology.bind(this);
		this.goToMeasurement = this.goToMeasurement.bind(this);
		this.goToConclusion = this.goToConclusion.bind(this);
		this.nextStep = this.nextStep.bind(this);
		this.previousStep = this.previousStep.bind(this);
	}
	
	goToBackground() {
		this.setState({step: 1});
	}
	
	goToMethodology() {
		this.setState({step: 2});
	}
	
	goToMeasurement() {
		this.setState({step: 3});
	}
	
	goToConclusion() {
		this.setState({step: 4});
	}
	
	nextStep() {
	  this.setState({
	    step : this.state.step + 1
	  })
	}
	
	previousStep() {
	  this.setState({
	    step : this.state.step - 1
	  })
	}
	
	
	render() {
		let subForm;
		
		switch(this.state.step) {
			case 1:
				subForm = <Background
							study={this.state.study}
							nextStep={this.nextStep} />;
				break;
			case 2:
				subForm = <Methodology 
							study={this.state.study}
							nextStep={this.nextStep} 
							previousStep={this.previousStep} />;
				break;
			case 3:
				subForm = <Measurement 
							study={this.state.study}
							nextStep={this.nextStep} 
							previousStep={this.previousStep} />;
				break;
			case 4:
				subForm = <Conclusion
							study={this.state.study}
							previousStep={this.previousStep} />;
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

export default ShowWrapper;