const React        = require('react');

const uiStore      = require('./stores/uIStore.es.js');
const showStore    = require('./stores/showStore.es.js');

const Background   = require('./components/background/ShowBackground.jsx');
const Methodology  = require('./components/methodology/ShowMethodology.jsx');
const Measurement  = require('./components/measurement/ShowMeasurement.jsx');
const Conclusion   = require('./components/conclusion/ShowConclusion.jsx');

const showActions  = require('./actions/showActions.es.js');

class ShowWrapper extends React.Component {
	constructor(props) {
		super(props);
		let ui = uiStore.getUI();
		let study = showStore.getStudy();
		 
		this.state = {
			step: ui.step,
			study: study
		};
		
		this._onChange = this._onChange.bind(this);
	}
	
	componentDidMount() {
		uiStore.addChangeListener(this._onChange);
	}
	
	componentWillUnmount() {
		uiStore.removeChangeListener(this._onChange);
	}
	
	_onChange() {
		let ui = uiStore.getUI();
		let study = showStore.getStudy();
		
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
						<a href="#" onClick={showActions.goToBackground}>Background</a>
					</div>
					<div>
						<a href="#" onClick={showActions.goToMethodology}>Methodology</a>
					</div>
					<div>
						<a href="#" onClick={showActions.goToMeasurement}>Measurement</a>
					</div>
					<div>
						<a href="#" onClick={showActions.goToConclusion}>Conclusion</a>
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