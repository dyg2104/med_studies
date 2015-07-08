var React = require('react');

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
		
			for (var i = 0; i < data.length; i++) {
				nodes.push(
					<Component
						key={i}
						position={i}
						controlGroupsCriteria={this.getControlGroupsData(i)}
						totalDataCriterion={data[i]} />
				);
			}
		
			return (
				<div>
					{this.props.title}
					{nodes}
					<a href='#' onClick={handleClick}>+</a>
				</div>
			)
		}
	});
	
	return ControlGroupsTotalData;
};