var React       = require('react');
var newActions  = require('../../actions/newActions.es.js');

var TextField = React.createClass({
	handleChange: function (e) {
		var keys = this.props.setterKeys;
		var value = e.target.value;
		newActions.updateField(keys, value);
	},
	
	render: function () {
		return (
			<div>
				<label>
			    {this.props.title}
				<input 
					type="text" 
					defaultValue={this.props.arrayValue}
					onChange={this.handleChange} />
				</label>
			</div>
        );
    }
});

module.exports = TextField;