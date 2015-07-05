var React           = require('react');
var StudyActions    = require('../../actions/StudyActions');
var TextArea        = require('../TextArea.jsx');
var FactoryCGTDSub  = require('../FactoryCGTDSub.jsx');
var FactoryCGTD     = require('../FactoryCGTD.jsx');

function ecClickHandler(e) {
	e.preventDefault();
	StudyActions.updateEligibilityCriteriaSize();
}

var Medication = FactoryCGTDSub('measurement', 'medications');
var AdverseEvent = FactoryCGTDSub('measurement', 'adverseEvents');
var PatientData = FactoryCGTDSub('measurement', 'patientData');

var Medications = FactoryCGTD(Medication, 'measurement', 'medications', ecClickHandler);
var AdverseEvents = FactoryCGTD(AdverseEvent, 'measurement', 'adverseEvents', ecClickHandler);
var PatientDataPlural = FactoryCGTD(PatientData, 'measurement', 'patientData', ecClickHandler);

var MeasurementSubForm = React.createClass({
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
			</div>
		)
	}
});

module.exports = MeasurementSubForm;