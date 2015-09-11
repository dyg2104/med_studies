const React         = require('react');
const TextField     = require('../shared/TextField.jsx');
const SearchActions = require('../../actions/SearchActions.es.js');

class SearchConclusion extends React.Component {
	constructor(props) {
		super(props)
	}
	
	submit(e) {
		e.preventDefault();
		SearchActions.submit();
	}
	
	render() {
		return (
			<div>
				Conclusion Search Form
				<TextField
					formObj={this.props.formObj}
					getterKey="summary"
					setterKey="summary"
					title="Summary" />
				<a href="#" onClick={this.submit}>Submit</a>
			</div>	
		);
	}
}

export default SearchConclusion;