const React              = require('react');
const SearchSubWrapper   = require('./components/SearchSubWrapper.jsx');
const ResultsSubWrapper  = require('./components/ResultsSubWrapper.jsx');

class SearchWrapper extends React.Component {
	constructor(props) {
		super(props)
		this.state = {step: 'search'};
		
		this.goToResults = this.goToResults.bind(this);
		this.goToSearch = this.goToSearch.bind(this);
	}
	
	goToSearch() {
		this.setState({step: 'search'});
	}
	
	goToResults() {
		this.setState({step: 'results'});
	}
	
	render() {
		let childComponent;
		
		if (this.state.step === 'search') {
			childComponent = <SearchSubWrapper changeStep={this.goToResults} />
		} else if (this.state.step === 'results') {
			childComponent = <ResultsSubWrapper changeStep={this.goToSearch} />
		}
		
		return (
			<div>
			{childComponent}
			</div>
		);
	}
}

export default SearchWrapper;