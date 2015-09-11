var React         = require('react');
var StudyActions  = require('../../actions/StudyActions.js');
var TextArea      = require('../TextArea.jsx');

var ConclusionSubForm = React.createClass({
	submit: function (e) {
		e.preventDefault();
		StudyActions.submit();
	},
	
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
				<a href="#" onClick={this.submit}>Submit</a>
			</div>
		)
	}
});

module.exports = ConclusionSubForm;