var React      = require('react');
var TextField  = require('./TextField.jsx');

var TextFieldCGTDValue = React.createClass({	
	render: function () {
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
});

module.exports = TextFieldCGTDValue;