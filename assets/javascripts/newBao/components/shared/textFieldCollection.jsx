const React          = require('react');
const BaseComponent  = require('../shared/BaseComponent.jsx');
const newActions     = require('../../actions/newActions.es.js');

module.exports = function(Component) {
	class Collection extends BaseComponent {				
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
					<Component
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
	
	return Collection;
}