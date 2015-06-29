var React                 = require('react');
var EligibilityCriterion  = require('./EligibilityCriterion.jsx');

var EligibilityCriteria = React.createClass({	
	getControlGroupsCriteria: function(position, length) {
		var criteria = [];
		var controlGroup;
		var criterion;
		
		for (var i = 0; i < length; i++) {
			var controlGroup = this.props.controlGroups[i];
			criterion = controlGroup['methodology']['eligibilityCriteria'][position];
			criteria.push(criterion);
		}
		
		return criteria;
	},
	
	render: function() {
		var nodes = [];
		var criteria = this.props.totalData['methodology']['eligibilityCriteria'];
		
		for (var i = 0; i < criteria.length; i++) {
			nodes.push(<EligibilityCriterion
							key={i}
							position={i}
							controlGroupsCriteria={this.getControlGroupsCriteria(i, criteria.length)}
							totalDataCriterion={criteria[i]} />);
		}
		
		return (
			<div>
				{this.props.title}
				{nodes}
			</div>
		)
	}
});

module.exports = EligibilityCriteria;