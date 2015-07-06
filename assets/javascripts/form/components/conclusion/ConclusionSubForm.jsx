var React     = require('react');
var TextArea  = require('../TextArea.jsx');

var ConclusionSubForm = React.createClass({
	render: function () {
		var conclusion = this.props.study['conclusion'];
		
		return (
		    <div>
				<TextArea 
					formObj={conclusion}
					getterKey="summary"
					setterKeys="conclusion:summary"
					title="Summary" />
				<a href="#" onClick={this.props.previousStep}>Previous</a>
			</div>
		)
	}
});

module.exports = ConclusionSubForm;