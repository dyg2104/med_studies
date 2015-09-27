const React            = require('react');
const BaseComponent    = require('./BaseComponent.jsx');

module.exports = function(Component) {
	class CGCollection extends BaseComponent {
		constructor(props) {
			super(props);
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
				</div>
			);
	    }
	};
	
	return CGCollection;
}