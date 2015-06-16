var React = require('react');

var TextField = React.createClass({
	getPositionValue: function () {
		var array = this.props.getValue();
		return array[this.props.keyPosition];
	},
	
	handleChange: function (e) {
		var array = this.props.getValue();
		array[this.props.keyPosition] = e.target.value;
	},
	
	render: function () {
		return (
			<div>
				<label>
			    {this.props.title}
				<input type="text" 
					defaultValue={this.getPositionValue()}
					onChange={this.handleChange} />
				</label>
			</div>
        );
    }
});

module.exports = TextField;