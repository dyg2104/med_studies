const React      = require('react');
const TextField  = require('../TextField.jsx');

class MeasurementSearchForm extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<div>
				Measurement Search Form
				<TextField
					formObj={this.props.formObj}
					getterKey="statisticalAnalysis"
					setterKey="statisticalAnalysis"
					title="Statistical Analysis" />
				<fieldset>
					Medications
					<TextField
						formObj={this.props.formObj}
						getterKey="medicationsName"
						setterKey="medicationsName"
						title="Name" />
					<TextField
						formObj={this.props.formObj}
						getterKey="medicationsUnit"
						setterKey="medicationsUnit"
						title="Units" />
					<TextField
						formObj={this.props.formObj}
						getterKey="medicationsType"
						setterKey="medicationsType"
						title="Type" />
					<TextField
						formObj={this.props.formObj}
						getterKey="medicationsBeforeData"
						setterKey="medicationsBeforeData"
						title="Before - Data" />
					<TextField
						formObj={this.props.formObj}
						getterKey="medicationsBeforeSD"
						setterKey="medicationsBeforeSD"
						title="Before - SD" />
					<TextField
						formObj={this.props.formObj}
						getterKey="medicationsAfterData"
						setterKey="medicationsAfterData"
						title="After - Data" />
					<TextField
						formObj={this.props.formObj}
						getterKey="medicationsAfterSD"
						setterKey="medicationsAfterSD"
						title="After - SD" />
					<TextField
						formObj={this.props.formObj}
						getterKey="medicationsDiffData"
						setterKey="medicationsDiffData"
						title="Difference - Data" />
					<TextField
						formObj={this.props.formObj}
						getterKey="medicationsDiffSD"
						setterKey="medicationsDiffSD"
						title="Difference - SD" />
				</fieldset>
				<fieldset>
					Adverse Events
					<TextField
						formObj={this.props.formObj}
						getterKey="adverseEventsName"
						setterKey="adverseEventsName"
						title="Name" />
					<TextField
						formObj={this.props.formObj}
						getterKey="adverseEventsUnit"
						setterKey="adverseEventsUnit"
						title="Units" />
					<TextField
						formObj={this.props.formObj}
						getterKey="adverseEventsType"
						setterKey="adverseEventsType"
						title="Type" />
					<TextField
						formObj={this.props.formObj}
						getterKey="adverseEventsBeforeData"
						setterKey="adverseEventsBeforeData"
						title="Before - Data" />
					<TextField
						formObj={this.props.formObj}
						getterKey="adverseEventsBeforeSD"
						setterKey="adverseEventsBeforeSD"
						title="Before - SD" />
					<TextField
						formObj={this.props.formObj}
						getterKey="adverseEventsAfterData"
						setterKey="adverseEventsAfterData"
						title="After - Data" />
					<TextField
						formObj={this.props.formObj}
						getterKey="adverseEventsAfterSD"
						setterKey="adverseEventsAfterSD"
						title="After - SD" />
					<TextField
						formObj={this.props.formObj}
						getterKey="adverseEventsDiffData"
						setterKey="adverseEventsDiffData"
						title="Difference - Data" />
					<TextField
						formObj={this.props.formObj}
						getterKey="adverseEventsDiffSD"
						setterKey="adverseEventsDiffSD"
						title="Difference - SD" />
				</fieldset>
				<fieldset>
					Patient Data
					<TextField
						formObj={this.props.formObj}
						getterKey="patientDataName"
						setterKey="patientDataName"
						title="Name" />
					<TextField
						formObj={this.props.formObj}
						getterKey="patientDataUnit"
						setterKey="patientDataUnit"
						title="Units" />
					<TextField
						formObj={this.props.formObj}
						getterKey="patientDataType"
						setterKey="patientDataType"
						title="Type" />
					<TextField
						formObj={this.props.formObj}
						getterKey="patientDataBeforeData"
						setterKey="patientDatasBeforeData"
						title="Before - Data" />
					<TextField
						formObj={this.props.formObj}
						getterKey="patientDataBeforeSD"
						setterKey="patientDataBeforeSD"
						title="Before - SD" />
					<TextField
						formObj={this.props.formObj}
						getterKey="patientDataAfterData"
						setterKey="patientDataAfterData"
						title="After - Data" />
					<TextField
						formObj={this.props.formObj}
						getterKey="patientDataAfterSD"
						setterKey="patientDataAfterSD"
						title="After - SD" />
					<TextField
						formObj={this.props.formObj}
						getterKey="patientDataDiffData"
						setterKey="patientDataDiffData"
						title="Difference - Data" />
					<TextField
						formObj={this.props.formObj}
						getterKey="patientDataDiffSD"
						setterKey="patientDataDiffSD"
						title="Difference - SD" />
				</fieldset>
			</div>	
		);
	}
}

export default MeasurementSearchForm;