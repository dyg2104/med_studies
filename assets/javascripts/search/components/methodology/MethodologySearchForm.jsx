const React      = require('react');
const TextField  = require('../TextField.jsx');

class MethodologySearchForm extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<div>
				Methodology Search Form
				<TextField
					formObj={this.props.formObj}
					getterKey="diagnosis"
					setterKey="diagnosis"
					title="Diagnosis" />
				<TextField
					formObj={this.props.formObj}
					getterKey="design"
					setterKey="design"
					title="Design" />
				<fieldset>
					Control Groups
					<TextField
						formObj={this.props.formObj}
						getterKey="controlGroupsName"
						setterKey="controlGroupsName"
						title="Name" />
					<TextField
						formObj={this.props.formObj}
						getterKey="controlGroupsNumPatients"
						setterKey="controlGroupsNumPatients"
						title="Number of Patients" />
					<TextField
						formObj={this.props.formObj}
						getterKey="controlGroupsNumMen"
						setterKey="controlGroupsNumMen"
						title="Number of Men" />
					<TextField
						formObj={this.props.formObj}
						getterKey="controlGroupsNumWomen"
						setterKey="controlGroupsNumWomen"
						title="Number of Women" />
				</fieldset>
				<TextField
					formObj={this.props.formObj}
					getterKey="primaryEndpoint"
					setterKey="primaryEndpoint"
					title="Primary Endpoint" />
				<TextField
					formObj={this.props.formObj}
					getterKey="secondaryEndpoint"
					setterKey="secondaryEndpoint"
					title="Secondary Endpoint" />
				<fieldset>
					Eligibility Criteria
					<TextField
						formObj={this.props.formObj}
						getterKey="eligibilityCriteriaName"
						setterKey="eligibilityCriteriaName"
						title="Name" />
					<TextField
						formObj={this.props.formObj}
						getterKey="eligibilityCriteriaUnits"
						setterKey="eligibilityCriteriaUnits"
						title="Units" />
					<TextField
						formObj={this.props.formObj}
						getterKey="eligibilityCriteriaLow"
						setterKey="eligibilityCriteriaLow"
						title="Low" />
					<TextField
						formObj={this.props.formObj}
						getterKey="eligibilityCriteriaHigh"
						setterKey="eligibilityCriteriaHigh"
						title="High" />
				</fieldset>
				<fieldset>
					Patient Characteristics
					<TextField
						formObj={this.props.formObj}
						getterKey="patientCharacteristicsName"
						setterKey="patientCharacteristicsname"
						title="Name" />
					<TextField
						formObj={this.props.formObj}
						getterKey="patientCharacteristicsUnits"
						setterKey="patientCharacteristicsUnits"
						title="Units" />
					<TextField
						formObj={this.props.formObj}
						getterKey="patientCharacteristicsType"
						setterKey="patientCharacteristicsType"
						title="Type" />
					<TextField
						formObj={this.props.formObj}
						getterKey="patientCharacteristicsData"
						setterKey="patientCharacteristicsData"
						title="Data" />
					<TextField
						formObj={this.props.formObj}
						getterKey="patientCharacteristicsSD"
						setterKey="patientCharacteristicsSD"
						title="SD" />
				</fieldset>
			</div>
		);
	}
}

export default MethodologySearchForm;