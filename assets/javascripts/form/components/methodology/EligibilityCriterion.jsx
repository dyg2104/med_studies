var _                         = require('underscore');
var React                     = require('react');
var TextFieldCGTD             = require('../TextFieldCGTD.jsx');
var TextFieldCGTDValue        = require('../TextFieldCGTDValue.jsx');

var EligibilityCriterion = React.createClass({			
	getCGSetterKeys: function(index, lastKey) {
		return 'controlGroups:' + index + ':methodology:eligibilityCriteria:' + this.props.position + ':' + lastKey;
	},
	
	getTDSetterKeys: function(lastKey) {
		return 'totalData:methodology:eligibilityCriteria:' + this.props.position + ':' + lastKey;
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
				
				<TextFieldCGTDValue 
					keyName="low"
					controlGroupsCriteria={this.props.controlGroupsCriteria} 
					totalDataCriterion={this.props.totalDataCriterion}
					getCGSetterKeys={this.getCGSetterKeys}
					getTDSetterKeys={this.getTDSetterKeys} 
					title="Low" />
					
				<TextFieldCGTDValue
					keyName="high" 
					controlGroupsCriteria={this.props.controlGroupsCriteria} 
					totalDataCriterion={this.props.totalDataCriterion}
					getCGSetterKeys={this.getCGSetterKeys}
					getTDSetterKeys={this.getTDSetterKeys} 
					title="High" />	
				
			</div>
		)
	}
});

module.exports = EligibilityCriterion;