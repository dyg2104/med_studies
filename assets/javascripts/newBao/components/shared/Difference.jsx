const React               = require('react');
const BaseComponent       = require('./BaseComponent.jsx');
const TextField           = require('./TextField.jsx');

class Difference extends BaseComponent {
	constructor(props) {
		super(props);
	}
	
	render() {
		let controlGroupValues = this.getValue();
		let setKey = this.getSetKey();
		let difference;
		
		if (controlGroupValues && controlGroupValues.difference) {
			difference = controlGroupValues.difference && controlGroupValues.difference.value ? controlGroupValues.difference.value : {};
		}
		
		return (
			<div>
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
		);
	}
}

export default Difference;