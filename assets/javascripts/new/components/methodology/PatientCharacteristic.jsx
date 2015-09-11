var _                   = require('underscore');
var React               = require('react');
var TextFieldCGTD       = require('../shared/TextFieldCGTD.jsx');
var TextFieldCGTDValue  = require('../shared/TextFieldCGTDValue.jsx');

var PatientCharacteristic = React.createClass({
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
					
				<TextFieldCGTDValue	
					controlGroupsData={this.props.controlGroupsData} 
					totalData={this.props.totalData}
					getterKey="data"
					setterKeys={this.props.setterKeys + ':' + "data"}
					title="Data" />
					
				<TextFieldCGTDValue
					controlGroupsData={this.props.controlGroupsData} 
					totalData={this.props.totalData}
					getterKey="sd"
					setterKeys={this.props.setterKeys + ':' + "sd"}
					title="SD" />
			</div>
		)
	}
});

module.exports = PatientCharacteristic;