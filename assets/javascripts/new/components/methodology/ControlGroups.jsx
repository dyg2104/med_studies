var React         = require('react');
var ControlGroup  = require('./ControlGroup.jsx');
var newActions    = require('../../actions/newActions.es.js');

var ControlGroups = React.createClass({				
	handleClick: function (e) {
		e.preventDefault();
		newActions.updateControlGroupsSize();
	},
	
	render: function () {
		var nodes = [];
		var controlGroups = this.props.formArr;
		var i;
		
		for(i = 0; i < controlGroups.length; i++) {
			nodes.push(
				<ControlGroup 
					key={i} 
					controlGroup={controlGroups[i]}
					setterKeys={this.props.setterKeys + ':' + i} />
			);
		}
		
		return (
			<div>
				{this.props.title}
			  	{nodes}
			  	<a href='#' onClick={this.handleClick}>+</a>
			</div>
		);
    }
});

module.exports = ControlGroups;