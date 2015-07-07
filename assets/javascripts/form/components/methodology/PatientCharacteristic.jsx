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
					getAllSetterKeys={this.getAllSetterKeys}
					lastKey="name"
					title="Name" />
					
				<TextFieldCGTD
					formObj={this.props.totalDataCriterion}
					getterKey="units"
					getAllSetterKeys={this.getAllSetterKeys}
					lastKey="units"
					title="Units" />
					
				<TextFieldCGTD
					formObj={this.props.totalDataCriterion}
					getterKey="type"
					getAllSetterKeys={this.getAllSetterKeys}
					lastKey="type"
					title="Type" />
					
				<TextFieldCGTDValue
					keyName="data"
					controlGroupsCriteria={this.props.controlGroupsCriteria} 
					totalDataCriterion={this.props.totalDataCriterion}
					getCGSetterKeys={this.getCGSetterKeys}
					getTDSetterKeys={this.getTDSetterKeys} 
					title="Data" />
					
				<TextFieldCGTDValue
					keyName="sd" 
					controlGroupsCriteria={this.props.controlGroupsCriteria} 
					totalDataCriterion={this.props.totalDataCriterion}
					getCGSetterKeys={this.getCGSetterKeys}
					getTDSetterKeys={this.getTDSetterKeys} 
					title="SD" />
			</div>
		)
	}
});

module.exports = PatientCharacteristic;