const React = require('react');

class TextArrayValue extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let title = this.props.title;
		let value = this.props.formObj[this.props.getterKey];
		
		return (
			<div>
				<div>{title}</div>
				<div>{value.join(', ')}</div>
			</div>
		);
	}
}

export default TextArrayValue;