const _                   = require('underscore');
const React               = require('react');
const BaseComponent       = require('../shared/BaseComponent.jsx');
const TextFieldCGTD       = require('../shared/TextFieldCGTD.jsx');
const TextFieldCGTDValue  = require('../shared/TextFieldCGTDValue.jsx');

class EligibilityCriterion extends BaseComponent {
	constructor(props) {
		super(props);
	}
	
	render() {
		let setterKeys = this.getSetterKeys();
		
		return (
			<div>
				<TextFieldCGTD
					formObj={this.props.totalData}
					getterKey="name"
					parentSetterKeys={setterKeys}
					setterKeys="name"
					title="Name" />
					
				<TextFieldCGTD
					formObj={this.props.totalData}
					getterKey="units"
					parentSetterKeys={setterKeys}
					setterKeys="units"
					title="Units" />
				
				<TextFieldCGTDValue 
					controlGroupsData={this.props.controlGroupsData} 
					totalData={this.props.totalData}
					getterKey="low"
					parentSetterKeys={setterKeys}
					setterKeys="low"
					title="Low" />
					
				<TextFieldCGTDValue
					controlGroupsData={this.props.controlGroupsData} 
					totalData={this.props.totalData}
					getterKey="high"
					parentSetterKeys={setterKeys}
					setterKeys="high"
					title="High" />	
			</div>
		)
	}
};

export default EligibilityCriterion;