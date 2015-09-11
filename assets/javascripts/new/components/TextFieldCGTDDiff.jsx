var React               = require('react');
var TextFieldCGTDValue  = require('./TextFieldCGTDValue.jsx');

var TextFieldCGTDDifference = React.createClass({	
	render: function () {
		return (
			<div>
				<div>
					Before
					<TextFieldCGTDValue
						controlGroupsData={this.props.controlGroupsData}
						totalData={this.props.totalData}
						getterKey="before:data"
						setterKeys={this.props.setterKeys + ':' + "before:data"}
						title="Data" />
		
					<TextFieldCGTDValue
						controlGroupsData={this.props.controlGroupsData}
						totalData={this.props.totalData}
						getterKey="before:sd"
						setterKeys={this.props.setterKeys + ':' + "before:sd"}
						title="SD" />
				</div>
		
				<div>
					After
					<TextFieldCGTDValue
						controlGroupsData={this.props.controlGroupsData}
						totalData={this.props.totalData}
						getterKey="after:data"
						setterKeys={this.props.setterKeys + ':' + "after:data"}
						title="Data" />
		
					<TextFieldCGTDValue
						controlGroupsData={this.props.controlGroupsData}
						totalData={this.props.totalData}
						getterKey="after:sd"
						setterKeys={this.props.setterKeys + ':' + "after:sd"}
						title="SD" />
				</div>
		
				<div>
					Difference
					<TextFieldCGTDValue
						controlGroupsData={this.props.controlGroupsData}
						totalData={this.props.totalData}
						getterKey="difference:data"
						setterKeys={this.props.setterKeys + ':' + "difference:data"}
						title="Data" />
		
					<TextFieldCGTDValue
						controlGroupsData={this.props.controlGroupsData}
						totalData={this.props.totalData}
						getterKey="difference:sd"
						setterKeys={this.props.setterKeys + ':' + "difference:sd"}
						title="SD" />
				</div>
			</div>
        );
    }
});

module.exports = TextFieldCGTDDifference;