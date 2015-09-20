const _           = require('underscore');
const React       = require('react');
const TextField   = require('./TextField.jsx');
const newActions  = require('../../actions/newActions.es.js');

class TextFieldArray extends React.Component {
	constructor(props) {
		super(props);
		
		this.getValue = this.getValue.bind(this);
		this.handleClick = this.handleClick.bind(this);
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
	
	handleClick(e) {
		e.preventDefault();
		let setKey = this.getSetKey();
		newActions.updateSize(setKey);
	}
	
	render() {
		let nodes = [];
		let array = this.getValue();
		let arraySize = array && array.length ? array.length : 1;
		let setKey = this.getSetKey();
		
		for(let i = 0; i < arraySize; i++) {
			nodes.push(
				<TextField 
					key={i}
					formObj={array}
					getKey={i} 
					parentSetKey={setKey} 
					index={i} />
			);
		}
		
		return (
			<div>
				{this.props.title}
			  	{nodes}
			  	<a href='#' onClick={this.handleClick}>+</a>
			</div>
		);
	}
}

export default TextFieldArray;