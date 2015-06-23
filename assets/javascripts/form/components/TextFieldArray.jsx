var React      = require('react');
var TextField  = require('./TextFieldArrayValue.jsx');

var TextFields = React.createClass({
	getInitialState: function () {
		var array = this.getValue();
		
		if (!array) {
			array = [''];
			this.setValue(array);
		}
		
		return {length: array.length};
	},
	
	setValue: function (value) {
		var formObj = this.props.getFormObj();
		var key = this.props.keyName;
		formObj[key] = value;
	},
	
	getValue: function () {
		var formObj = this.props.getFormObj();
		var key = this.props.keyName;
		return formObj[key];
	},
	
	handleClick: function (e) {
		e.preventDefault();
		var array = this.getValue();
		array.push('');
		this.setState({length: array.length});
	},
	
	render: function () {
		var array = this.getValue();
		var nodes = [];
		var i;
		
		for(i = 0; i < this.state.length; i++) {
			nodes.push(<TextField getFormArray={this.getValue} key={i} keyPosition={i} />);
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