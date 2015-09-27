const React               = require('react');
const BaseComponent       = require('./BaseComponent.jsx');
const TextField           = require('./TextField.jsx');

class After extends BaseComponent {
	constructor(props) {
		super(props);
	}
	
	render() {
		let controlGroupValues = this.getValue();
		let setKey = this.getSetKey();
		let after;
		
		if (controlGroupValues && controlGroupValues.after) {
			after = controlGroupValues.after && controlGroupValues.after.value ? controlGroupValues.after.value : {};
		}
		
		return (
			<div>
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
		);
	}
}

export default After;