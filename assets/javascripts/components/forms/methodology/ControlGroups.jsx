var React         = require('react');
var ControlGroup  = require('./ControlGroup.jsx');

var ControlGroups = React.createClass({	
	getInitialState: function () {
		var controlGroups = this.getValue();
		return {length: controlGroups.length};
	},
	
	getValue: function () {
		var study = this.props.getFormObj();
		study['controlGroups'] = study['controlGroups'] || [{}];
		return study['controlGroups'];	
	},
	
	handleClick: function (e) {
		e.preventDefault();
		var controlGroups = this.getValue();
		controlGroups.push({});
		this.setState({length: controlGroups.length});
	},
	
	render: function () {
		var controlGroups = this.getValue();
		var nodes = [];
		var i;
		
		for(i = 0; i < this.state.length; i++) {
			nodes.push(<ControlGroup getFormObj={this.getValue} key={i} keyPosition={i} />);
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