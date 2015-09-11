const React           = require('react');

const TextValue       = require('../TextValue.jsx');
const FactoryCGTDSub  = require('../FactoryCGTDSub.jsx');
const FactoryCGTD     = require('../FactoryCGTD.jsx');

const Medication      = FactoryCGTDSub('measurement', 'medications');
const AdverseEvent    = FactoryCGTDSub('measurement', 'adverseEvents');
const PatientDatum    = FactoryCGTDSub('measurement', 'patientData');

const Medications     = FactoryCGTD(Medication, 'measurement', 'medications');
const AdverseEvents   = FactoryCGTD(AdverseEvent, 'measurement', 'adverseEvents');
const PatientData     = FactoryCGTD(PatientDatum, 'measurement', 'patientData');

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