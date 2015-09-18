const React          = require('react');
const findNameSpace  = require('find-namespace-value');

class TextValue extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let title = this.props.title;
		let value = findNameSpace(this.props.getterKey, this.props.formObj);
		
		if (!(title && value)) {
			return false;
		}
		
		return (
			<div>
				<div>{title}</div>
				<div>{value}</div>
			</div>
		);
	}
}

export default TextValue;