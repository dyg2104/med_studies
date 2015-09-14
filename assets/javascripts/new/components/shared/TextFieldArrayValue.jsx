const React       = require('react');
const newActions  = require('../../actions/newActions.es.js');

class TextFieldArrayValue extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) {
		let keys = this.props.setterKeys;
		let value = e.target.value;
		newActions.updateField(keys, value);
	}
	
	render() {
		return (
			<div>
				<label>
			    {this.props.title}
				<input 
					type="text" 
					defaultValue={this.props.arrayValue}
					onChange={this.handleChange} />
				</label>
			</div>
        );
    }
};

export default TextFieldArrayValue;