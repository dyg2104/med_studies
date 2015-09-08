const React                = require('react');
const ControlGroups        = require('./ControlGroups.jsx');
const EligibilityCriteria  = require('./EligibilityCriteria.jsx');
const TextValue            = require('../TextValue.jsx');
const TextArrayValue       = require('../TextArrayValue.jsx');

class ShowMethodology extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let methodology = this.props.study['methodology'];
		let controlGroups = this.props.study['control_groups'];
		let totalData = this.props.study['total_datum'];
		
		return (
			<div>
				<TextValue 
					formObj={methodology} 
					getterKey="diagnosis"
					title="Diagnosis" />
				<TextValue 
					formObj={methodology} 
					getterKey="design"
					title="Design" />
				<ControlGroups 
					formArr={controlGroups} />
				<TextValue 
					formObj={methodology} 
					getterKey="primary_endpoint"
					title="Primary Endpoint" />
				<TextArrayValue 
					formObj={methodology} 
					getterKey="secondary_endpoints" 
					title="Secondary Endpoints"/>
				<EligibilityCriteria 
					controlGroups={controlGroups}
					totalData={totalData} />
			</div>
		);
	}
}

export default ShowMethodology;