const React               = require('react');
const BaseComponent       = require('./BaseComponent.jsx');
const TextField           = require('./TextField.jsx');

class LowHigh extends BaseComponent {
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
					getKey="low"
					parentSetKey={setKey} 
					setKey="low"
					title="Low" />
				<TextField
					formObj={controlGroupValues}
					getKey="high"
					parentSetKey={setKey} 
					setKey="high"
					title="High" />
			</div>
		);
	}
}

export default LowHigh;