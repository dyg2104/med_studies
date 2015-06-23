var React         = require('react');
var StudyActions  = require('../actions/StudyActions');

var TextField = React.createClass({
	handleChange: function (e) {
		var keys = this.props.keys;
		var value = e.target.value;
		StudyActions.updateField(keys, value);
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