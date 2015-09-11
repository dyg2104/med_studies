const React   = require('react');
const Result  = require('./Result.jsx');

class ResultsSubWrapper extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let results = [];
		
		for (let resData of this.props.formArr) {
			let id = resData['_id'];
			let source = resData['_source'];
			results.push(<Result id={id} source={source} />);
		}
		
		return (
			<div>
				Results Sub Wrapper
				{results}
			</div>
		)
	}
}

export default ResultsSubWrapper;