var React              = require('react');

var TextArea           = require('../shared/TextArea.jsx');
var FactoryCGTDSub     = require('../shared/FactoryCGTDSub.jsx');
var FactoryCGTD        = require('../shared/FactoryCGTD.jsx');

var Medication         = FactoryCGTDSub('measurement', 'medications');
var AdverseEvent       = FactoryCGTDSub('measurement', 'adverseEvents');
var PatientData        = FactoryCGTDSub('measurement', 'patientData');
var handlers           = require('./clickHandlers');

var Medications        = FactoryCGTD(Medication, 'measurement', 'medications', handlers.medications);
var AdverseEvents      = FactoryCGTD(AdverseEvent, 'measurement', 'adverseEvents', handlers.adverseEvents);
var PatientDataPlural  = FactoryCGTD(PatientData, 'measurement', 'patientData', handlers.patientData);

var StudyActions       = require('../../actions/StudyActions');

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
				<a href="#" onClick={this.props.previousStep}>Previous</a>
				<a href="#" onClick={this.props.nextStep}>Next</a>
			</div>
		)
	}
});

module.exports = NewMeasurement;