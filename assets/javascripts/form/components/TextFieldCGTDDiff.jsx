var React               = require('react');
var TextFieldCGTDValue  = require('./TextFieldCGTDValue.jsx');

var TextFieldCGTDDifference = React.createClass({	
	render: function () {
				
		return (
			<div>
				<div>
					Before
					<TextFieldCGTDValue
						keyName="before:data"
						title="Data" 
						controlGroupsCriteria={this.props.controlGroupsCriteria} 
						totalDataCriterion={this.props.totalDataCriterion}
						getCGSetterKeys={this.props.getCGSetterKeys}
						getTDSetterKeys={this.props.getTDSetterKeys} />
		
					<TextFieldCGTDValue
						keyName="before:sd"
						title="SD" 
						controlGroupsCriteria={this.props.controlGroupsCriteria} 
						totalDataCriterion={this.props.totalDataCriterion}
						getCGSetterKeys={this.props.getCGSetterKeys}
						getTDSetterKeys={this.props.getTDSetterKeys} />
				</div>
		
				<div>
					After
					<TextFieldCGTDValue
						keyName="after:data"
						title="Data" 
						controlGroupsCriteria={this.props.controlGroupsCriteria} 
						totalDataCriterion={this.props.totalDataCriterion}
						getCGSetterKeys={this.props.getCGSetterKeys}
						getTDSetterKeys={this.props.getTDSetterKeys} />
		
					<TextFieldCGTDValue
						keyName="after:sd"
						title="SD" 
						controlGroupsCriteria={this.props.controlGroupsCriteria} 
						totalDataCriterion={this.props.totalDataCriterion}
						getCGSetterKeys={this.props.getCGSetterKeys}
						getTDSetterKeys={this.props.getTDSetterKeys} />
				</div>
		
				<div>
					Difference
					<TextFieldCGTDValue
						keyName="difference:data"
						title="Data" 
						controlGroupsCriteria={this.props.controlGroupsCriteria} 
						totalDataCriterion={this.props.totalDataCriterion}
						getCGSetterKeys={this.props.getCGSetterKeys}
						getTDSetterKeys={this.props.getTDSetterKeys} />
		
					<TextFieldCGTDValue
						keyName="difference:sd"
						title="SD" 
						controlGroupsCriteria={this.props.controlGroupsCriteria} 
						totalDataCriterion={this.props.totalDataCriterion}
						getCGSetterKeys={this.props.getCGSetterKeys}
						getTDSetterKeys={this.props.getTDSetterKeys} />
				</div>
			</div>
        );
    }
});

module.exports = TextFieldCGTDDifference;