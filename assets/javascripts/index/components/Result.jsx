const React = require('react');

class Result extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let id = this.props.id;
		let source = this.props.source;
		
		return (
			<div>
				<div>
					<a href={'/studies/' + id + '/'}>{source['title']}</a>
				</div>
				<div>
					<span>{source['description']}</span>
				</div>
			</div>
		)
	}
}

export default Result;