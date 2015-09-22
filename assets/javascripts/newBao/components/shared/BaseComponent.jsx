const _      = require('underscore');
const React  = require('react');

class BaseComponent extends React.Component {
	constructor(props) {
		super(props);
		this.getValue = this.getValue.bind(this);
		this.getSetKey = this.getSetKey.bind(this);
	}
	
	getValue() {
		let formObj = this.props.formObj;
		let valueObj;
		let value;
		
		if (formObj && formObj[this.props.getKey]) {
			valueObj = formObj[this.props.getKey];
		}
		
		if (valueObj) {
			value = valueObj.value
		}
		
		return value;
	}
	
	getSetKey() {
		let keys = [];
		
		if (this.props.parentSetKey) {
			keys.push(this.props.parentSetKey);
		}
		
		if (_.isNumber(this.props.index)) {
			keys.push(this.props.index);
		}
		
		if (this.props.setKey) {
			keys.push(this.props.setKey);
		}
		
		return (keys.length > 0) ? keys.join(':') : '';
	}
}

export default BaseComponent;