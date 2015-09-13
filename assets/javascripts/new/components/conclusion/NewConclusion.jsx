const React         = require('react');
const TextArea      = require('../shared/TextArea.jsx');
const uiActions     = require('../../actions/uiActions.es.js');
const StudyActions  = require('../../actions/StudyActions.js');

var NewConclusion = React.createClass({
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
				<a href="#" onClick={uiActions.previousStep}>Previous</a>
				<a href="#" onClick={this.submit}>Submit</a>
			</div>
		)
	}
});

module.exports = NewConclusion;