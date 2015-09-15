const React              = require('react');

const TextArea           = require('../shared/TextArea.jsx');
const factoryCGTDSub     = require('../shared/factoryCGTDSub.jsx');
const factoryCGTD        = require('../shared/factoryCGTD.jsx');

const Medication         = factoryCGTDSub('measurement', 'medications');
const AdverseEvent       = factoryCGTDSub('measurement', 'adverseEvents');
const PatientData        = factoryCGTDSub('measurement', 'patientData');

const Medications        = factoryCGTD(Medication, 'measurement', 'medications', 'medications');
const AdverseEvents      = factoryCGTD(AdverseEvent, 'measurement', 'adverseEvents', 'adverseEvents');
const PatientDataPlural  = factoryCGTD(PatientData, 'measurement', 'patientData', 'patientData');

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