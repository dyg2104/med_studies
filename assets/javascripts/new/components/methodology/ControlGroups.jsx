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
		newActions.updateControlGroupsSize();
	}
	
	render() {
		let nodes = [];
		let controlGroups = this.props.formArr;
		let setterKeys = this.getSetterKeys();
		
		for(let i = 0; i < controlGroups.length; i++) {
			let controlGroup = controlGroups[i];
			
			nodes.push(
				<ControlGroup
					key={i}
					controlGroup={controlGroup}
					parentSetterKeys={setterKeys}
					index={i} />
			);
		}
		
		return (
			<div>
				Control Groups
				{nodes}
				<a href='#' onClick={this.handleClick}>+</a>
			</div>
		);
    }
};

export default ControlGroups;