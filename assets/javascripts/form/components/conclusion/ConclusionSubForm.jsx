var React     = require('react');
var TextArea  = require('../TextArea.jsx');

var ConclusionSubForm = React.createClass({
	render: function () {
		var conclusion = this.props.study['conclusion'];
		
		return (
		    <TextArea 
				formObj={conclusion}
				getterKey="summary"
				setterKeys="conclusion:summary"
				title="Summary" />
		)
	}
});

module.exports = ConclusionSubForm;