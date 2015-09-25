const React               = require('react');
const BaseComponent       = require('../shared/BaseComponent.jsx');
const TextField           = require('../shared/TextField.jsx');

class DataSD extends BaseComponent {
	constructor(props) {
		super(props);
	}
	
	render() {
		let controlGroupValues = this.getValue(); 
		let setKey = this.getSetKey();
		
		return (
			<div>
				<TextField
					formObj={controlGroupValues}
					getKey="data"
					parentSetKey={setKey} 
					setKey="data"
					title="Data" />
				<TextField
					formObj={controlGroupValues}
					getKey="sd"
					parentSetKey={setKey} 
					setKey="sd"
					title="SD" />
			</div>
		);
	}
}

export default DataSD;