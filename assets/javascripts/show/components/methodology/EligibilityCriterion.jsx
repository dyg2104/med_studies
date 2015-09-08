const React          = require('react');
const findNameSpace  = require('find-namespace-value');

class EligibilityCriterion extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let index = this.props.index;
		let controlGroups = this.props.controlGroups;
		let totalData = this.props.totalData;
		
		let allCriteria = findNameSpace('methodology.eligibilityCriteria', totalData);
		let criteria = allCriteria[index];
		
		return (
			<div>
				<div>{criteria.name}</div>
				<div>{criteria.units}</div>
			</div>
		);
	}
}

export default EligibilityCriterion;