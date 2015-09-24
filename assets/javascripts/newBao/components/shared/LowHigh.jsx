const React               = require('react');
const BaseComponent       = require('../shared/BaseComponent.jsx');
const TextField           = require('../shared/TextField.jsx');

class LowHigh extends BaseComponent {
	constructor(props) {
		super(props);
	}
	
	render() {
		let controlGroupValues = this.getValue(); 
		let setKey = this.getSetKey();
		
		return (
			<div>
				Low High
			</div>
		);
	}
}

export default LowHigh;