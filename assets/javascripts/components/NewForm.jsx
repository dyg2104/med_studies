var React        = require('react');
var Background   = require('./BackgroundSubForm.jsx');
var Methodology  = require('./MethodologySubForm.jsx');
var Measurement  = require('./MeasurementSubForm.jsx');
var Conclusion   = require('./ConclusionSubForm.jsx');

var NewForm = React.createClass({
	getInitialState: function () {
		return {
			step: 1
		}
	},
	
	goToBackground: function () {
		this.setState({step: 1});
	},
	
	goToMethodology: function () {
		this.setState({step: 2});
	},
	
	goToMeasurement: function () {
		this.setState({step: 3});
	},
	
	goToConclusion: function () {
		this.setState({step: 4});
	},
	
	render: function () {
		var subForm;
		
		switch(this.state.step) {
			case 1:
				subForm = <Background />;
				break;
			case 2:
				subForm = <Methodology />;
				break;
			case 3:
				subForm = <Measurement />;
				break;
			case 4:
				subForm = <Conclusion />;
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