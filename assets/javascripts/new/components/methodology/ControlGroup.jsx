var React      = require('react');
var TextField  = require('../shared/TextField.jsx');

var ControlGroup = React.createClass({	
	render: function () {
		return (
			<div>
				<TextField 
					formObj={this.props.controlGroup}
					getterKey="name" 
					setterKeys={this.props.setterKeys + ":name"}
					title="Name" />
				<TextField 
					formObj={this.props.controlGroup}
					getterKey="numPatients" 
					setterKeys={this.props.setterKeys + ":numPatients"}
					title="Number of Patients" />
				<TextField 
					formObj={this.props.controlGroup}
					getterKey="numMen" 
					setterKeys={this.props.setterKeys + ":numMen"}
					title="Number of Men" />
				<TextField 
					formObj={this.props.controlGroup}
					getterKey="numWomen" 
					setterKeys={this.props.setterKeys + ":numWomen"}
					title="Number of Women" />
			</div>
        );
    }
});

module.exports = ControlGroup;