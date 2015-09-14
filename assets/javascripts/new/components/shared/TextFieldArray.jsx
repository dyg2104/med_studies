const React         = require('react');
const TextField     = require('./TextFieldArrayValue.jsx');
const newActions    = require('../../actions/newActions.es.js');

class TextFieldArray extends React.Component {
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
		let keys = this.props.setterKeys;
		newActions.updateArraySize(keys);
	}
	
	render() {
		let nodes = [];
		let array = this.getValue();
		let i;
		
		for(i = 0; i < array.length; i++) {
			nodes.push(
				<TextField 
					key={i} 
					arrayValue={array[i]} 
					setterKeys={this.props.setterKeys + ':' + i} />
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