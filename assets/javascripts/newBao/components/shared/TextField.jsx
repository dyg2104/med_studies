const _              = require('underscore');
const React          = require('react');
const BaseComponent  = require('./BaseComponent.jsx');
const newActions     = require('../../actions/newActions.es.js');

class TextField extends BaseComponent {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
		
	handleChange(e) {
		let key = this.getSetKey();
		let value = e.target.value;
		newActions.updateField(key, value);
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
}

export default TextField;