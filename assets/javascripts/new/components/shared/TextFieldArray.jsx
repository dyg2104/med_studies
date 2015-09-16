const React          = require('react');
const BaseComponent  = require('./BaseComponent.jsx');
const TextField      = require('./TextFieldArrayValue.jsx');
const newActions     = require('../../actions/newActions.es.js');

class TextFieldArray extends BaseComponent {
	constructor(props) {
		super(props);
		this.getValue = this.getValue.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	
	getValue() {
		let formObj = this.props.formObj;
		return formObj[this.props.getterKey];
	}
	
	handleClick(e) {
		e.preventDefault();
		let setterKeys = this.getSetterKeys();
		newActions.updateArraySize(setterKeys);
	}
	
	render() {
		let nodes = [];
		let array = this.getValue();
		let setterKeys = this.getSetterKeys();
		
		for(let i = 0; i < array.length; i++) {
			nodes.push(
				<TextField 
					key={i}
					arrayValue={array[i]} 
					parentSetterKeys={setterKeys} 
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