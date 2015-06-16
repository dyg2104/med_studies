var React      = require('react');
var TextField  = require('./TextField.jsx');

var ControlGroup = React.createClass({
	getFormObj: function () {
		var controlGroups = this.props.getFormObj();
		return controlGroups[this.props.keyPosition];
	},
	
	render: function () {
		return (
			<div>
				<TextField getFormObj={this.getFormObj} keyName="name" title="Name" />
				<TextField getFormObj={this.getFormObj} keyName="numPatients" title="Number of Patients" />
				<TextField getFormObj={this.getFormObj} keyName="numMen" title="Number of Men" />
				<TextField getFormObj={this.getFormObj} keyName="numWomen" title="Number of Women" />
			</div>
        );
    }
});

module.exports = ControlGroup;