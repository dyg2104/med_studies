const _      = require('underscore');
const React  = require('react');

class BaseComponent extends React.Component {
	constructor(props) {
		super(props);
		let getSetterKeys = this.getSetterKeys.bind(this);
	}
	
	getSetterKeys() {
		let keys = [];
		
		if (this.props.parentSetterKeys) {
			keys.push(this.props.parentSetterKeys);
		}
		
		if (_.isNumber(this.props.index)) {
			keys.push(this.props.index);
		}
		
		if (this.props.setterKeys) {
			keys.push(this.props.setterKeys);
		}
		
		return (keys.length > 0) ? keys.join(':') : '';
	}
}

export default BaseComponent;