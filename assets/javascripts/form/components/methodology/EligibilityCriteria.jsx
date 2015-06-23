var React                   = require('react');
var EligibilityCriterionCG  = require('./EligibilityCriterionCG.jsx');
var EligibilityCriterionTD  = require('./EligibilityCriterionTD.jsx');

var EligibilityCriteria = React.createClass({
	render: function () {
		var controlGroups = this.props.getControlGroups();
		var eligibilityCriterionNodes = controlGroups.map(function (controlGroup) {
			var getFormObj = function () {
				return controlGroup;
			}
			return (
				<EligibilityCriterionCG getFormObj={getFormObj}/>
			)
		});
		
		return (
			<div>
				{eligibilityCriterionNodes}
				<EligibilityCriterionTD getFormObj={this.props.getTotalData} />
			</div>
		)
	}
});

module.exports = EligibilityCriteria;