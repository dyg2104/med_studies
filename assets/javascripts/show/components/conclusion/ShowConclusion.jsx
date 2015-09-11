const React      = require('react');
const TextValue  = require('../shared/TextValue.jsx');

class ShowConclusion extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let conclusion = this.props.study.conclusion;
		
		return (
			<div>
				<TextValue 
					formObj={conclusion} 
					getterKey="summary"
					title="Summary" />
			</div>
		);
	}
}

export default ShowConclusion;