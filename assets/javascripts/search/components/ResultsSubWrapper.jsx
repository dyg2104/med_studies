const React = require('react');

class ResultsSubWrapper extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {		
		return (
			<div>
				Results Sub Wrapper
				<div>
					<a href="#" onClick={this.props.changeStep}>Search</a>
				</div>
			</div>
		);
	}
}

export default ResultsSubWrapper