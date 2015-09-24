const React          = require('react');
const newStore       = require('../../stores/newStore.es.js');
const BaseComponent  = require('../shared/BaseComponent.jsx');

module.exports = function(Component) {
	class CGCollection extends BaseComponent {
		constructor(props) {
			super(props);
			
			let controlGroupsSize = newStore.getControlGroupsSize();
			this.state = {controlGroupsSize};
			this._onChange = this._onChange.bind(this);
		}
		
		componentDidMount() {
			newStore.addChangeListener(this._onChange);
		}
	
		componentWillUnmount() {
			newStore.removeChangeListener(this._onChange);
		}
		
		_onChange() {
			let controlGroupsSize = newStore.getControlGroupsSize();
			this.setState({controlGroupsSize});
		}
	
		render() {
			let nodes = [];
			let array = this.getValue();
			let setKey = this.getSetKey();
		
			for(let i = 0; i < this.state.controlGroupsSize; i++) {
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