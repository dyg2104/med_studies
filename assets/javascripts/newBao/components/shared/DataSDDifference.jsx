const React               = require('react');
const BaseComponent       = require('./BaseComponent.jsx');
const TextField           = require('./TextField.jsx');

class Before extends BaseComponent {
	constructor(props) {
		super(props);
	}
	
	render() {
		let controlGroupValues = this.getValue();
		let setKey = this.getSetKey();
		let before;
		let after;
		let difference;
		
		if (controlGroupValues && controlGroupValues.before) {
			before = controlGroupValues.before && controlGroupValues.before.value ? controlGroupValues.before.value : {};
		}
		
		if (controlGroupValues && controlGroupValues.after) {
			after = controlGroupValues.after && controlGroupValues.after.value ? controlGroupValues.after.value : {};
		}
		
		if (controlGroupValues && controlGroupValues.difference) {
			difference = controlGroupValues.difference && controlGroupValues.difference.value ? controlGroupValues.difference.value : {};
		}
		
		return (
			<div>
				<div>
					Before
					<TextField
						formObj={before}
						getKey="data"
						parentSetKey={setKey} 
						setKey="before:data"
						title="Data" />
					<TextField
						formObj={before}
						getKey="sd"
						parentSetKey={setKey} 
						setKey="before:sd"
						title="SD" />
				</div>
				<div>
					After
					<TextField
						formObj={after}
						getKey="data"
						parentSetKey={setKey} 
						setKey="after:data"
						title="Data" />
					<TextField
						formObj={after}
						getKey="sd"
						parentSetKey={setKey} 
						setKey="after:sd"
						title="SD" />
				</div>
				<div>
					Difference
					<TextField
						formObj={difference}
						getKey="data"
						parentSetKey={setKey} 
						setKey="difference:data"
						title="Data" />
					<TextField
						formObj={difference}
						getKey="sd"
						parentSetKey={setKey} 
						setKey="difference:sd"
						title="SD" />
				</div>
			</div>
		);
	}
}

export default Before;