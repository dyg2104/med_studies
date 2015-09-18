const React                 = require('react');
const EligibilityCriterion  = require('./EligibilityCriterion.jsx');
const findNameSpace         = require('find-namespace-value');

class EligibilityCriteria extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let controlGroups = this.props.controlGroups;
		let totalData = this.props.totalData;
		
		let eligibilityCriteria = findNameSpace('methodology.eligibilityCriteria', totalData);
		
		let length = eligibilityCriteria && eligibilityCriteria.length ? eligibilityCriteria.length : 0;
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