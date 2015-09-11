var React        = require('react');
var Background   = require('./components/background/NewBackground.jsx');
var Methodology  = require('./components/methodology/NewMethodology.jsx');
var Measurement  = require('./components/measurement/NewMeasurement.jsx');
var Conclusion   = require('./components/conclusion/NewConclusion.jsx');
var StudyStore   = require('./stores/StudyStore');

var NewWrapper = React.createClass({
	getInitialState: function() {
		var step = 1;
		var study = StudyStore.getStudy();
		return {
			step: step,
			study: study
		}
	},
	
	componentDidMount: function() {
		StudyStore.addChangeListener(this._onChange);
	},
	
	componentWillUnmount: function() {
		StudyStore.removeChangeListener(this._onChange);
	},
	
	_onChange: function() {
		var study = StudyStore.getStudy();
		this.setState({study: study});
	},
	
	goToBackground: function() {
		this.setState({step: 1});
	},
	
	goToMethodology: function() {
		this.setState({step: 2});
	},
	
	goToMeasurement: function() {
		this.setState({step: 3});
	},
	
	goToConclusion: function() {
		this.setState({step: 4});
	},
	
	nextStep: function() {
	  this.setState({
	    step : this.state.step + 1
	  })
	},
	
	previousStep: function() {
	  this.setState({
	    step : this.state.step - 1
	  })
	},
	
	render: function() {
		var subForm;
		
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
});

module.exports = NewWrapper;