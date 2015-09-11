var _                   = require('underscore');
var React               = require('react');
var TextFieldCGTD       = require('./TextFieldCGTD.jsx');
var TextFieldCGTDDiff   = require('./TextFieldCGTDDiff.jsx');

module.exports = function(firstKey, secondKey) {
	var ControlGroupsTotalDataSub = React.createClass({	
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
					
					<TextFieldCGTD
						formObj={this.props.totalData}
						getterKey="type"
						setterKeys={this.props.setterKeys + ':' + "type"}
						title="Type" />
					
					<TextFieldCGTDDiff 
						controlGroupsData={this.props.controlGroupsData}
						totalData={this.props.totalData}
						setterKeys={this.props.setterKeys} />
				</div>
			)
		}
	});
	
	return ControlGroupsTotalDataSub;
};