const React              = require('react');
const factoryCollection  = require('../shared/factoryCollection.jsx');

const TextField          = require('../shared/TextField.jsx');
const CGCollectionSub    = require('../shared/CGCollectionSub.jsx');
const Medications        = factoryCollection(CGCollectionSub);
const AdverseEvents      = factoryCollection(CGCollectionSub);
const PatientData        = factoryCollection(CGCollectionSub);

const uiActions          = require('../../actions/uiActions.es.js');

class NewMeasurement extends React.Component {
	constructor(props) {
		super(props);
		
		this.previousStep = this.previousStep.bind(this);
		this.nextStep = this.nextStep.bind(this);
	}
	
	previousStep() {
		this.context.executeAction(uiActions.previousStep);
	}
	
	nextStep() {
		this.context.executeAction(uiActions.nextStep);
	}
	
	render() {
		let study = this.props.study;
		let measurement;
		
		if (study && study.measurement) {
			measurement = study.measurement.value ? study.measurement.value : {};
		}
		
		return(
			<div>
				<TextField 
					formObj={measurement} 
					getKey="statisticalAnalysis"
					setKey="measurement:statisticalAnalysis"
					title="Statistical Analysis" />
				<Medications 
					formObj={measurement} 
					getKey="medications"
					setKey="measurement:medications"
					title="Medications" />
				<AdverseEvents 
					formObj={measurement} 
					getKey="adverseEvents"
					setKey="measurement:adverseEvents"
					title="Adverse Events" />
				<PatientData 
					formObj={measurement} 
					getKey="patientData"
					setKey="measurement:patientData"
					title="Patient Data" />
				<a href="#" onClick={this.previousStep}>Previous</a>
				<a href="#" onClick={this.nextStep}>Next</a>
			</div>
		);
	}
}

NewMeasurement.contextTypes = {
    getStore     : React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired
};


export default NewMeasurement;