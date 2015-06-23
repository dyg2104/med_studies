var React         = require('react');
var StudyActions  = require('../actions/StudyActions');

var TextField = React.createClass({
	getValue: function () {
		var formObj = this.props.formObj;
		return formObj[this.props.keys];	
	},
	
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
					defaultValue={this.getValue()}
					onChange={this.handleChange} />
				</label>
			</div>
        );
    }
});

module.exports = TextField;