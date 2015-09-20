const _           = require('underscore');
const React       = require('react');
const newActions  = require('../../actions/newActions.es.js');

class TextField extends React.Component {
	constructor(props) {
		super(props);
		this.getValue = this.getValue.bind(this);
		this.getSetKey = this.getSetKey.bind(this);
		this.handleChange = this.handleChange.bind(this);
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
	
	handleChange(e) {
		let key = this.getSetKey();
		let value = e.target.value;
		newActions.updateField(key, value);
	}
	
	render() {
		return (
			<div>
				<label>
			    {this.props.title}
				<input 
					type="text"
					defaultValue={this.getValue()}
					onChange={this.handleChange} />
				</label>
			</div>
		);
	}
}

export default TextField;