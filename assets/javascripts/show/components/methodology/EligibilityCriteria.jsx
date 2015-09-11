const React                 = require('react');
const EligibilityCriterion  = require('./EligibilityCriterion.jsx');

class EligibilityCriteria extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let controlGroups = this.props.controlGroups;
		let totalData = this.props.totalData;
		
		let length = totalData.methodology.eligibilityCriteria.length;
		let eligibilityCriteriaMarkup = [];
		
		for (let i = 0; i < length; i++) {
			eligibilityCriteriaMarkup.push(
				<EligibilityCriterion 
					controlGroups={controlGroups} 
					totalData={totalData} 
					index={i} />
			);
		}
		
		return (
			<div>
				<div>Eligibility Criteria</div>
				<div>{eligibilityCriteriaMarkup}</div>
			</div>
		);
	}
}

export default EligibilityCriteria;