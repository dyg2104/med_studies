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
		
		let tdCriteria = findNameSpace('methodology.eligibilityCriteria', totalData);
		let tdCriterion = tdCriteria[index];
		
		let cgLowMarkup = [];
		let cgHighMarkup = [];
		
		for (let controlGroup of controlGroups) {
			let cgCriteria = findNameSpace('methodology.eligibilityCriteria', controlGroup);
			let cgCriterion = cgCriteria[index];
			cgLowMarkup.push(<div>{cgCriterion.low}</div>);
			cgHighMarkup.push(<div>{cgCriterion.high}</div>);
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
					<div>Low</div>
					<div>
						{cgLowMarkup}
						<div>{tdCriterion.low}</div>
					</div>
				</div>
				<div>
					<div>High</div>
					<div>
						{cgHighMarkup}
						<div>{tdCriterion.high}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default EligibilityCriterion;