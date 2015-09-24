const React                = require('react');
const BaseComponent        = require('../shared/BaseComponent.jsx');
const TextField            = require('../shared/TextField.jsx');
const factoryCGCollection  = require('../shared/factoryCGCollection.jsx');

const LowHigh              = require('../shared/LowHigh.jsx');
const LowHighs             = factoryCGCollection(LowHigh);

class EligibilityCriterion extends BaseComponent {
	constructor(props) {
		super(props);
	}
	
	render() {
		let eligibilityCriterion = this.getValue(); 
		let setKey = this.getSetKey();
		
		return (
			<div>
				<TextField 
					formObj={eligibilityCriterion}
					getKey="name"
					parentSetKey={setKey}
					setKey="name"
					title="Name" />
				<TextField 
					formObj={eligibilityCriterion}
					getKey="units"
					parentSetKey={setKey}
					setKey="units"
					title="Units" />
				<LowHighs 
					formObj={eligibilityCriterion} 
					getKey="controlGroups"
					parentSetKey={setKey}
					setKey="controlGroups"
					title="Low Highs" />
			</div>
		);
	}
}

export default EligibilityCriterion;