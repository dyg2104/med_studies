var React        = require('react');
var Background   = require('./components/background/BackgroundSubForm.jsx');
var Methodology  = require('./components/methodology/MethodologySubForm.jsx');
var Measurement  = require('./components/measurement/MeasurementSubForm.jsx');
var Conclusion   = require('./components/conclusion/ConclusionSubForm.jsx');
var StudyStore   = require('./stores/StudyStore');

var NewForm = React.createClass({
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
	
	_onChange: function() {
		var study = StudyStore.getStudy();
		this.setState({study: study});
	},
	
	render: function() {
		var subForm;
		
		switch(this.state.step) {
			case 1:
				subForm = <Background
							study={this.state.study}
							nextStep={this.nextStep} 
							previousStep={this.previousStep} />;
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
							nextStep={this.nextStep} 
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
		)
	}
});

module.exports = NewForm;