var React         = require('react');
var StudyActions  = require('../actions/StudyActions');
var TextField     = require('./TextFieldArrayValue.jsx');

var TextFields = React.createClass({	
	getValue: function () {
		var formObj = this.props.formObj;
		return formObj[this.props.keys];	
	},
	
	handleClick: function (e) {
		e.preventDefault();
		var keys = this.props.keys;
		StudyActions.updateArraySize(keys);
	},
	
	render: function () {
		var nodes = [];
		var array = this.getValue();
		var i;
		
		for(i = 0; i < array.length; i++) {
			nodes.push(<TextField 
							key={i} 
							keys={this.props.keys + ':' + i} 
							arrayValue={array[i]} />);
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

module.exports = TextFields;