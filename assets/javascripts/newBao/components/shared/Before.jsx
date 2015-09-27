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
		
		if (controlGroupValues && controlGroupValues.before) {
			before = controlGroupValues.before && controlGroupValues.before.value ? controlGroupValues.before.value : {};
		}
		
		return (
			<div>
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
		);
	}
}

export default Before;