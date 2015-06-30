var React = require('react');

module.exports = function(Component, firstKey, secondKey, handleClick) {
	var ControlGroupsTotalData = React.createClass({
		getControlGroupsCriteria: function(position) {
			var criteria = [];
			var controlGroup;
			var criterion;
		
			for (var i = 0; i < this.props.controlGroups.length; i++) {
				var controlGroup = this.props.controlGroups[i];
				criterion = controlGroup[firstKey][secondKey][position];
				criteria.push(criterion);
			}
		
			return criteria;
		},
		
		render: function() {
			var nodes = [];
			var criteria = this.props.totalData[firstKey][secondKey];
		
			for (var i = 0; i < criteria.length; i++) {
				nodes.push(<Component
							key={i}
							position={i}
							controlGroupsCriteria={this.getControlGroupsCriteria(i)}
							totalDataCriterion={criteria[i]} />);
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