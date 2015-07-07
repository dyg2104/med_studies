var React      = require('react');
var TextField  = require('./TextField.jsx');

var TextFieldCGTDValue = React.createClass({	
	render: function () {
		var nodes = [];
		var criterion;
		var i;
	
		for(i = 0; i < this.props.controlGroupsCriteria.length; i++) {
			criterion = this.props.controlGroupsCriteria[i];
			nodes.push(<TextField 
						key={i}
						formObj={criterion}
						getterKey={this.props.keyName}
						setterKeys={this.props.getCGSetterKeys(i, this.props.keyName)}
						title={this.props.title} />);
		}
	
		nodes.push(<TextField 
					key={i+1}
					formObj={this.props.totalDataCriterion}
					getterKey={this.props.keyName}
					setterKeys={this.props.getTDSetterKeys(this.props.keyName)}
					title={this.props.title} />);
					
		return (
			<div>
				{nodes}
			</div>
        );
    }
});

module.exports = TextFieldCGTDValue;