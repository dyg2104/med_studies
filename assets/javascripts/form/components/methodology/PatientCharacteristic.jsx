var _                   = require('underscore');
var React               = require('react');
var TextFieldCGTD       = require('../TextFieldCGTD.jsx');
var TextFieldCGTDValue  = require('../TextFieldCGTDValue.jsx');

var PatientCharacteristic = React.createClass({			
	getCGSetterKeys: function(index, lastKey) {
		return 'controlGroups:' + index + ':methodology:patientCharacteristics:' + this.props.position + ':' + lastKey;
	},
	
	getTDSetterKeys: function(lastKey) {
		return 'totalData:methodology:patientCharacteristics:' + this.props.position + ':' + lastKey;
	},
	
	getAllSetterKeys: function(lastKey) {
		var keys = [];
		var criterion;
		
		for(var i = 0; i < this.props.controlGroupsCriteria.length; i++) {
			keys.push(this.getCGSetterKeys(i, lastKey));
		}
		keys.push(this.getTDSetterKeys(lastKey));
		
		return keys;
	},
	
	render: function () {
		return (
			<div>
				<TextFieldCGTD
					formObj={this.props.totalDataCriterion}
					getterKey="name"
					lastKey="name"
					getAllSetterKeys={this.getAllSetterKeys}
					title="Name" />
					
				<TextFieldCGTD
					formObj={this.props.totalDataCriterion}
					getterKey="units"
					lastKey="units"
					getAllSetterKeys={this.getAllSetterKeys}
					title="Units" />
					
				<TextFieldCGTD
					formObj={this.props.totalDataCriterion}
					getterKey="type"
					lastKey="type"
					getAllSetterKeys={this.getAllSetterKeys}
					title="Type" />
					
				<TextFieldCGTDValue
					keyName="data"
					title="Data" 
					controlGroupsCriteria={this.props.controlGroupsCriteria} 
					totalDataCriterion={this.props.totalDataCriterion}
					getCGSetterKeys={this.getCGSetterKeys}
					getTDSetterKeys={this.getTDSetterKeys} />
					
				<TextFieldCGTDValue
					keyName="sd"
					title="SD" 
					controlGroupsCriteria={this.props.controlGroupsCriteria} 
					totalDataCriterion={this.props.totalDataCriterion}
					getCGSetterKeys={this.getCGSetterKeys}
					getTDSetterKeys={this.getTDSetterKeys} />
			</div>
		)
	}
});

module.exports = PatientCharacteristic;