var _                         = require('underscore');
var React                     = require('react');
var StudyActions              = require('../../actions/StudyActions');
var TextFieldCGTD             = require('../TextFieldCGTD.jsx');
var EligibilityCriterionLow   = require('./EligibilityCriterionLow.jsx');
var EligibilityCriterionHigh  = require('./EligibilityCriterionHigh.jsx');

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
					lastKey="name"
					getAllSetterKeys={this.getAllSetterKeys}
					title="Name" />
					
				<TextFieldCGTD
					formObj={this.props.totalDataCriterion}
					getterKey="units"
					lastKey="units"
					getAllSetterKeys={this.getAllSetterKeys}
					title="Units" />
				
				<EligibilityCriterionLow 
					controlGroupsCriteria={this.props.controlGroupsCriteria} 
					totalDataCriterion={this.props.totalDataCriterion}
					getCGSetterKeys={this.getCGSetterKeys}
					getTDSetterKeys={this.getTDSetterKeys} />
					
				<EligibilityCriterionHigh 
					controlGroupsCriteria={this.props.controlGroupsCriteria} 
					totalDataCriterion={this.props.totalDataCriterion}
					getCGSetterKeys={this.getCGSetterKeys}
					getTDSetterKeys={this.getTDSetterKeys} />	
				
			</div>
		)
	}
});

module.exports = EligibilityCriterion;