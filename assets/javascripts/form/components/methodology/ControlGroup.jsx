var React      = require('react');
var TextField  = require('../TextField.jsx');

var ControlGroup = React.createClass({
	getControlGroup: function () {
		var controlGroups = this.props.getFormArray();
		return controlGroups[this.props.keyPosition];
	},
	
	render: function () {
		return (
			<div>
				<TextField getFormObj={this.getControlGroup} 
					keyName="name" 
					title="Name" />
				<TextField getFormObj={this.getControlGroup} 
					keyName="numPatients" 
					title="Number of Patients" />
				<TextField getFormObj={this.getControlGroup} 
					keyName="numMen" 
					title="Number of Men" />
				<TextField getFormObj={this.getControlGroup} 
					keyName="numWomen" 
					title="Number of Women" />
			</div>
        );
    }
});

module.exports = ControlGroup;