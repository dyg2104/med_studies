const React              = require('react');

const TextArea           = require('../shared/TextArea.jsx');
const FactoryCGTDSub     = require('../shared/FactoryCGTDSub.jsx');
const FactoryCGTD        = require('../shared/FactoryCGTD.jsx');

const Medication         = FactoryCGTDSub('measurement', 'medications');
const AdverseEvent       = FactoryCGTDSub('measurement', 'adverseEvents');
const PatientData        = FactoryCGTDSub('measurement', 'patientData');
const handlers           = require('./clickHandlers');

const Medications        = FactoryCGTD(Medication, 'measurement', 'medications', handlers.medications);
const AdverseEvents      = FactoryCGTD(AdverseEvent, 'measurement', 'adverseEvents', handlers.adverseEvents);
const PatientDataPlural  = FactoryCGTD(PatientData, 'measurement', 'patientData', handlers.patientData);

const uiActions          = require('../../actions/uiActions.es.js');

var NewMeasurement = React.createClass({
	render: function () {
		var measurement = this.props.study['measurement'];
		var controlGroups = this.props.study['controlGroups'];
		var totalData = this.props.study['totalData'];
		
		return (
			<div>
			    <TextArea 
					formObj={measurement}
					getterKey="statisticalAnalysis"
					setterKeys="measurement:statisticalAnalysis"
					title="Statistical Analysis" />
				<Medications 
					controlGroups={controlGroups}
					totalData={totalData}
					title="Medications" />
				<AdverseEvents
					controlGroups={controlGroups}
					totalData={totalData}
					title="Adverse Events" />
				<PatientDataPlural
					controlGroups={controlGroups}
					totalData={totalData}
					title="Patient Data" />
				<a href="#" onClick={uiActions.previousStep}>Previous</a>
				<a href="#" onClick={uiActions.nextStep}>Next</a>
			</div>
		)
	}
});

module.exports = NewMeasurement;