const React          = require('react');
const BaseComponent  = require('./BaseComponent.jsx');
const newActions     = require('../../actions/newActions.es.js');

class TextField extends BaseComponent {
	constructor(props) {
		super(props);
		this.getValue = this.getValue.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	getValue() {
		let formObj = this.props.formObj;
		return formObj[this.props.getterKey];	
	}
	
	handleChange(e) {
		let keys = this.getSetterKeys();
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
					defaultValue={this.getValue()}
					onChange={this.handleChange} />
				</label>
			</div>
        );
    }
};

export default TextField;