const React        = require('react');

const uiStore      = require('./stores/uiStore.es.js');
const studyStore   = require('./stores/studyStore');

const Background   = require('./components/background/NewBackground.jsx');
const Methodology  = require('./components/methodology/NewMethodology.jsx');
const Measurement  = require('./components/measurement/NewMeasurement.jsx');
const Conclusion   = require('./components/conclusion/NewConclusion.jsx');

const uiActions    = require('./actions/uiActions.es.js');

class NewWrapper extends React.Component {
	constructor(props) {
		super(props);	
		let ui = uiStore.getUI();
		let study = studyStore.getStudy();
		
		this.state = {
			step: ui.step,
			study: study
		};
		
		this._onChange = this._onChange.bind(this);
	}
	
	componentDidMount() {
		uiStore.addChangeListener(this._onChange);
		studyStore.addChangeListener(this._onChange);
	}
	
	componentWillUnmount() {
		uiStore.removeChangeListener(this._onChange);
		studyStore.removeChangeListener(this._onChange);
	}
	
	_onChange() {
		let ui = uiStore.getUI();
		let study = studyStore.getStudy();
		
		this.setState({
			step: ui.step, 
			study: study
		});
	}
		
	render() {
		let subForm;
		
		switch(this.state.step) {
			case 1:
				subForm = <Background study={this.state.study} />;
				break;
			case 2:
				subForm = <Methodology study={this.state.study} />;
				break;
			case 3:
				subForm = <Measurement study={this.state.study} />;
				break;
			case 4:
				subForm = <Conclusion study={this.state.study} />;
				break; 
		}
		
		return (
			<div>
				<div>
					<div>
						<a href="#" onClick={uiActions.goToBackground}>Background</a>
					</div>
					<div>
						<a href="#" onClick={uiActions.goToMethodology}>Methodology</a>
					</div>
					<div>
						<a href="#" onClick={uiActions.goToMeasurement}>Measurement</a>
					</div>
					<div>
						<a href="#" onClick={uiActions.goToConclusion}>Conclusion</a>
					</div>
				</div>
				<div>
					{subForm}
				</div>
			</div>
		);
	}
};

export default NewWrapper;