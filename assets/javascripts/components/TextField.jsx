var React = require('react');

var TextField = React.createClass({
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
	
	handleChange: function (e) {
		this.setValue(e.target.value);
	},
	
	render: function () {
		return (
			<div>
				<label>
			    {this.props.title}
				<input type="text" 
					defaultValue={this.getValue()}
					onChange={this.handleChange} />
				</label>
			</div>
        );
    }
});

module.exports = TextField;