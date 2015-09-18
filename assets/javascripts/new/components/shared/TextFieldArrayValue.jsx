const React          = require('react');
const BaseComponent  = require('./BaseComponent.jsx');
const newActions     = require('../../actions/newActions.es.js');

class TextFieldArrayValue extends BaseComponent {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) {
		let setterKeys = this.getSetterKeys();
		let value = e.target.value;
		newActions.updateField(setterKeys, value);
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