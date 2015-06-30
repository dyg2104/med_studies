var React                 = require('react');
var StudyActions          = require('../../actions/StudyActions');
var EligibilityCriterion  = require('./EligibilityCriterion.jsx');

var EligibilityCriteria = React.createClass({	
	getControlGroupsCriteria: function(position) {
		var criteria = [];
		var controlGroup;
		var criterion;
		
		for (var i = 0; i < this.props.controlGroups.length; i++) {
			var controlGroup = this.props.controlGroups[i];
			criterion = controlGroup['methodology']['eligibilityCriteria'][position];
			criteria.push(criterion);
		}
		
		return criteria;
	},
	
	handleClick: function (e) {
		e.preventDefault();
		StudyActions.updateEligibilityCriteriaSize();
	},
	
	render: function() {
		var nodes = [];
		var criteria = this.props.totalData['methodology']['eligibilityCriteria'];
		
		for (var i = 0; i < criteria.length; i++) {
			nodes.push(<EligibilityCriterion
							key={i}
							position={i}
							controlGroupsCriteria={this.getControlGroupsCriteria(i)}
							totalDataCriterion={criteria[i]} />);
		}
		
		return (
			<div>
				{this.props.title}
				{nodes}
				<a href='#' onClick={this.handleClick}>+</a>
			</div>
		)
	}
});

module.exports = EligibilityCriteria;