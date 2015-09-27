const React            = require('react');
const NewStore         = require('../../stores/NewStore.es.js');
const BaseComponent    = require('./BaseComponent.jsx');
const connectToStores  = require('fluxible-addons-react/connectToStores');

module.exports = function(Component) {
	class CGCollection extends BaseComponent {
		constructor(props) {
			super(props);
		}
			
		render() {
			let nodes = [];
			let array = this.getValue();
			let setKey = this.getSetKey();
			
			for(let i = 0; i < this.props.controlGroupsSize; i++) {
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
	
	return connectToStores(CGCollection, [NewStore], (context) => {
		let newStore = context.getStore(NewStore);
		
		return {
			controlGroupsSize: newStore.getControlGroupsSize()
		};
	});
}