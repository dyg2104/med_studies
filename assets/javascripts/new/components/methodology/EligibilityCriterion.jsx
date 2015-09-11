var _                   = require('underscore');
var React               = require('react');
var TextFieldCGTD       = require('../shared/TextFieldCGTD.jsx');
var TextFieldCGTDValue  = require('../shared/TextFieldCGTDValue.jsx');

var EligibilityCriterion = React.createClass({
	render: function () {
		return (
			<div>
				<TextFieldCGTD
					formObj={this.props.totalData}
					getterKey="name"
					setterKeys={this.props.setterKeys + ':' + "name"}
					title="Name" />
					
				<TextFieldCGTD
					formObj={this.props.totalData}
					getterKey="units"
					setterKeys={this.props.setterKeys + ':' + "units"}
					title="Units" />
				
				<TextFieldCGTDValue 
					controlGroupsData={this.props.controlGroupsData} 
					totalData={this.props.totalData}
					getterKey="low"
					setterKeys={this.props.setterKeys + ':' + "low"}
					title="Low" />
					
				<TextFieldCGTDValue
					controlGroupsData={this.props.controlGroupsData} 
					totalData={this.props.totalData}
					getterKey="high"
					setterKeys={this.props.setterKeys + ':' + "high"}
					title="High" />	
			</div>
		)
	}
});

module.exports = EligibilityCriterion;