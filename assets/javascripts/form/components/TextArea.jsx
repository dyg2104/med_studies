var React         = require('react');
var StudyActions  = require('../actions/StudyActions');

var TextArea = React.createClass({
	getValue: function () {
		var formObj = this.props.formObj;
		return formObj[this.props.getterKey];	
	},
	
	handleChange: function (e) {
		var keys = this.props.setterKeys;
		var value = e.target.value;
		StudyActions.updateField(keys, value);
	},
	
	render: function () {
		return (
			<div>
				<label>
			    {this.props.title}
				<textarea 
					defaultValue={this.getValue()}
					onChange={this.handleChange} />
				</label>
			</div>
        );
    }
});

module.exports = TextArea;