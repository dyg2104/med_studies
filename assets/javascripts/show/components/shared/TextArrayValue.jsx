const React          = require('react');
const findNameSpace  = require('find-namespace-value');

class TextArrayValue extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let title = this.props.title;
		let value = findNameSpace(this.props.getterKey, this.props.formObj);
		
		return (
			<div>
				<div>{title}</div>
				<div>{value.join(', ')}</div>
			</div>
		);
	}
}

export default TextArrayValue;