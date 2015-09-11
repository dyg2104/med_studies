const React          = require('react');
const findNameSpace  = require('find-namespace-value');

class PatientCharacteristic extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let index = this.props.index;
		let controlGroups = this.props.controlGroups;
		let totalData = this.props.totalData;
		
		let tdCriteria = findNameSpace('methodology.patientCharacteristics', totalData);
		let tdCriterion = tdCriteria[index];
		
		let cgDataMarkup = [];
		let cgSdMarkup = [];
		
		for (let controlGroup of controlGroups) {
			let cgCriteria = findNameSpace('methodology.patientCharacteristics', controlGroup);
			let cgCriterion = cgCriteria[index];
			cgDataMarkup.push(<div>{cgCriterion.data}</div>);
			cgSdMarkup.push(<div>{cgCriterion.sd}</div>);
		}
		
		return (
			<div>
				<div>
					<div>Name</div>
					<div>{tdCriterion.name}</div>
				</div>
				<div>
					<div>Units</div>
					<div>{tdCriterion.units}</div>
				</div>
				<div>
					<div>Type</div>
					<div>{tdCriterion.type}</div>
				</div>
				<div>
					<div>Data</div>
					<div>
						{cgDataMarkup}
						<div>{tdCriterion.data}</div>
					</div>
				</div>
				<div>
					<div>SD</div>
					<div>
						{cgSdMarkup}
						<div>{tdCriterion.sd}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PatientCharacteristic;