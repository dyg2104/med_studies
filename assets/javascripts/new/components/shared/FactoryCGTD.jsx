const React     = require('react');
const handlers  = require('./clickHandlers.es.js');

module.exports = function(Component, firstKey, secondKey, handleClick) {
	var ControlGroupsTotalData = React.createClass({
		getControlGroupsData: function(position) {
			var data = [];
			var controlGroup;
			var singular;
		
			for (var i = 0; i < this.props.controlGroups.length; i++) {
				controlGroup = this.props.controlGroups[i];
				singular = controlGroup[firstKey][secondKey][position];
				data.push(singular);
			}
		
			return data;
		},
		
		render: function() {
			var nodes = [];
			var data = this.props.totalData[firstKey][secondKey];
			var handler = handlers[handleClick];
		
			for (var i = 0; i < data.length; i++) {
				nodes.push(
					<Component
						key={i}
						controlGroupsData={this.getControlGroupsData(i)}
						totalData={data[i]} 
						getterKey={firstKey + ':' + secondKey + ':' + i}
						setterKeys={firstKey + ':' + secondKey + ':' + i} />
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
	});
	
	return ControlGroupsTotalData;
};