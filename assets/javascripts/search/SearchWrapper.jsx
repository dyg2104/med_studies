const React              = require('react');
const SearchSubWrapper   = require('./components/SearchSubWrapper.jsx');
const ResultsSubWrapper  = require('./components/ResultsSubWrapper.jsx');
const SearchStore        = require('./stores/SearchStore.es.js');

class SearchWrapper extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			step: 'search',
			search: SearchStore.getSearch()
		};
		
		this._onChange = this._onChange.bind(this);
		this.goToSearch = this.goToSearch.bind(this);		
		this.goToResults = this.goToResults.bind(this);
	}
	
	componentDidMount() {
		SearchStore.addChangeListener(this._onChange);
	}
	
	componentWillUnmount() {
		SearchStore.removeChangeListener(this._onChange);
	}
	
	_onChange() {
		let search = SearchStore.getSearch();
		this.setState({search: search});
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
			childComponent = <SearchSubWrapper formObj={this.state.search} />
		} else if (this.state.step === 'results') {
			childComponent = <ResultsSubWrapper />
		}
		
		return (
			<div>
				<div>
					<a href="#" onClick={this.goToSearch}>Search</a>
				</div>
				<div>
					<a href="#" onClick={this.goToResults}>Results</a>
				</div>
				<div>
					{childComponent}
				</div>
			</div>
		);
	}
}

export default SearchWrapper;