var React      = require('react');
var TextField  = require('../TextField.jsx');

//TODO break this out into a function that creates either EC low or EC high components.

var EligibilityCriterionLow = React.createClass({	
	render: function () {
		var lowNodes = [];
		var criterion;
		var i;
		
		for(i = 0; i < this.props.controlGroupsCriteria.length; i++) {
			criterion = this.props.controlGroupsCriteria[i];
			lowNodes.push(<TextField 
							formObj={criterion}
							key={i}
							getterKey="low"
							setterKeys={this.props.getCGSetterKeys(i, 'low')}
							title="Low" />);
		}
		
		lowNodes.push(<TextField 
						formObj={this.props.totalDataCriterion}
						key={i+1}
						getterKey="low"
						setterKeys={this.props.getTDSetterKeys('low')}
						title="Low" />);
						
		return (
			<div>
				{lowNodes}
			</div>
        );
    }
});

module.exports = EligibilityCriterionLow;