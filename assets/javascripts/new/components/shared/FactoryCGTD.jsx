const React          = require('react');
const BaseComponent  = require('./BaseComponent.jsx');
const handlers       = require('./clickHandlers.es.js');

module.exports = function(Component, firstKey, secondKey, handleClick) {
	class ControlGroupsTotalData extends BaseComponent {
		constructor(props) {
			super(props);
			this.getControlGroupsData = this.getControlGroupsData.bind(this);
		}
		
		getControlGroupsData(position) {
			let data = [];
			let controlGroup;
			let singular;
		
			for (let i = 0; i < this.props.controlGroups.length; i++) {
				controlGroup = this.props.controlGroups[i];
				singular = controlGroup[firstKey][secondKey][position];
				data.push(singular);
			}
		
			return data;
		}
		
		render() {
			let nodes = [];
			let data = this.props.totalData[firstKey][secondKey];
			let handler = handlers[handleClick];
		
			for (let i = 0; i < data.length; i++) {
				nodes.push(
					<Component
						key={i}
						controlGroupsData={this.getControlGroupsData(i)}
						totalData={data[i]} 
						getterKey={firstKey + ':' + secondKey + ':' + i}
						parentSetterKeys={firstKey + ':' + secondKey}
						index={i} />
				);
			}
		
			return (
				<div>
					{this.props.title}
					{nodes}
					<a href='#' onClick={handler}>+</a>
				</div>
			)
		}
	};
	
	return ControlGroupsTotalData;
};