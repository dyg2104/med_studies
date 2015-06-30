var React         = require('react');
var TextField     = require('../TextField.jsx');

var EligibilityCriterionHigh = React.createClass({	
	render: function () {
		var highNodes = [];
		var criterion;
		var i;
		
		for(i = 0; i < this.props.controlGroupsCriteria.length; i++) {
			criterion = this.props.controlGroupsCriteria[i];
			highNodes.push(<TextField 
							formObj={criterion}
							key={i}
							getterKey="high"
							setterKeys={this.props.getCGSetterKeys(i, 'high')}
							title="High" />);
		}
		
		highNodes.push(<TextField
						formObj={this.props.totalDataCriterion}
						key={i+1}
						getterKey="high"
						setterKeys={this.props.getTDSetterKeys('high')}
						title="High" />);
						
		return (
			<div>
				{highNodes}
			</div>
        );
    }
});

module.exports = EligibilityCriterionHigh;