var React         = require('react');
var ControlGroup  = require('./ControlGroup.jsx');

var ControlGroups = React.createClass({	
	getInitialState: function () {
		var controlGroups = this.props.getFormArray();
		return {length: controlGroups.length};
	},
	
	handleClick: function (e) {
		e.preventDefault();
		var controlGroups = this.props.getFormArray();
		controlGroups.push({});
		this.setState({length: controlGroups.length});
	},
	
	render: function () {
		var controlGroups = this.props.getFormArray();
		var nodes = [];
		var i;
		
		for(i = 0; i < this.state.length; i++) {
			nodes.push(<ControlGroup getFormArray={this.props.getFormArray} key={i} keyPosition={i} />);
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