var React           = require('react');
var TextField       = require('./TextField.jsx');
var TextFieldArray  = require('./TextFieldArray.jsx');

var BackgroundSubForm = React.createClass({
	getFormObj: function () {
		var formObj = this.props.getStudy();
		return formObj;
	},
	
	render: function () {
		
		return (
			<div>
				<div>background</div>
			    <TextField getFormObj={this.getFormObj} keyName="title" title="Title" />
				<TextFieldArray getFormObj={this.getFormObj} keyName="authors" title="Authors" />
				<TextField getFormObj={this.getFormObj} keyName="description" title="Description" />	
				<a href="#" onClick={this.props.nextStep}>Next</a>
			</div>
		)
	}
});

module.exports = BackgroundSubForm;