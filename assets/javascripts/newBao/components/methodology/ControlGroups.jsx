const React          = require('react');
const BaseComponent  = require('../shared/BaseComponent.jsx');
const ControlGroup   = require('./ControlGroup.jsx');
const newActions     = require('../../actions/newActions.es.js');

class ControlGroups extends BaseComponent {				
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
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
				<ControlGroup
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
};

export default ControlGroups;