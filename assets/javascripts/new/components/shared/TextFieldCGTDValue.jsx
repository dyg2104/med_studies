const React          = require('react');
const BaseComponent  = require('../shared/BaseComponent.jsx');
const TextField      = require('./TextField.jsx');

class TextFieldCGTDValue extends BaseComponent {
	constructor(props) {
		super(props);
	}
	
	render() {
		var nodes = [];
		var data;
		var i;
	
		for(i = 0; i < this.props.controlGroupsData.length; i++) {
			data = this.props.controlGroupsData[i];
			nodes.push(
				<TextField
					key={i}
					formObj={data}
					getterKey={this.props.getterKey}
					setterKeys={'controlGroups:' + i + ':' + this.props.setterKeys}
					title={this.props.title} />
			);
		}
	
		nodes.push(
			<TextField 
				key={i+1}
				formObj={this.props.totalData}
				getterKey={this.props.getterKey}
				setterKeys={'totalData:' + this.props.setterKeys}
				title={this.props.title} />
		);
					
		return (
			<div>
				{nodes}
			</div>
        );
    }
};

export default TextFieldCGTDValue;