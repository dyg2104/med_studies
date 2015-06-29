var _              = require('underscore');
var React          = require('react');
var StudyActions   = require('../../actions/StudyActions');
var TextField      = require('../TextField.jsx');
var TextFieldCGTD  = require('../TextFieldCGTD.jsx');

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
	
	getDefaultValue: function(key) {
		return this.props.totalDataCriterion[key];
	},
	
	render: function () {
		var lowNodes = [];
		var highNodes = [];
		var criterion;
		
		for(var i = 0; i < this.props.controlGroupsCriteria.length; i++) {
			criterion = this.props.controlGroupsCriteria[i];
			lowNodes.push(<TextField 
							formObj={criterion}
							getterKey={'low'}
							setterKeys={this.getCGSetterKeys(i, 'low')}
							title="Low" />);
		}
		
		lowNodes.push(<TextField 
						formObj={this.props.totalDataCriterion}
						getterKey={'low'}
						setterKeys={this.getTDSetterKeys('low')}
						title="Low" />);
		
		for(var j = 0; j < this.props.controlGroupsCriteria.length; j++) {
			criterion = this.props.controlGroupsCriteria[j];
			highNodes.push(<TextField 
							formObj={criterion}
							getterKey={'high'}
							setterKeys={this.getCGSetterKeys(j, 'high')}
							title="High" />);
		}
		
		highNodes.push(<TextField
						formObj={this.props.totalDataCriterion}
						getterKey={'high'}
						setterKeys={this.getTDSetterKeys('high')}
						title="High" />);
		
		return (
			<div>
				<TextFieldCGTD
					formObj={this.props.totalDataCriterion}
					getterKey={'name'}
					lastKey={'name'}
					getAllSetterKeys={this.getAllSetterKeys}
					title="Name" />
					
				<TextFieldCGTD
					formObj={this.props.totalDataCriterion}
					getterKey={'units'}
					lastKey={'units'}
					getAllSetterKeys={this.getAllSetterKeys}
					title="Units" />
						
				<div>
					{lowNodes}
				</div>
				<div>
					{highNodes}
				</div>
			</div>
		)
	}
});

module.exports = EligibilityCriterion;