const React           = require('react');

const TextValue       = require('../shared/TextValue.jsx');
const factoryCGTDSub  = require('../shared/factoryCGTDSub.jsx');
const factoryCGTD     = require('../shared/factoryCGTD.jsx');

const Medication      = factoryCGTDSub('measurement.medications');
const AdverseEvent    = factoryCGTDSub('measurement.adverseEvents');
const PatientDatum    = factoryCGTDSub('measurement.patientData');

const Medications     = factoryCGTD(Medication, 'measurement.medications');
const AdverseEvents   = factoryCGTD(AdverseEvent, 'measurement.adverseEvents');
const PatientData     = factoryCGTD(PatientDatum, 'measurement.patientData');

class ShowMeasurement extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let measurement = this.props.study['measurement'];
		let controlGroups = this.props.study['control_groups'];
		let totalData = this.props.study['total_datum'];
		
		return (
			<div>
				<TextValue 
					formObj={measurement} 
					getterKey="statistical_analysis"
					title="Statistical Analysis" />
				<Medications
					controlGroups={controlGroups}
					totalData={totalData}
					title="Medications" />
				<AdverseEvents
					controlGroups={controlGroups}
					totalData={totalData}
					title="Adverse Events" />
				<PatientData
					controlGroups={controlGroups}
					totalData={totalData}
					title="Patient Data" />
			</div>
		);
	}
}

export default ShowMeasurement;