const _              = require('underscore');
const React          = require('react');
const BaseComponent  = require('./BaseComponent.jsx');
const newActions     = require('../../actions/newActions.es.js');

class TextArea extends BaseComponent {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
		
	handleChange(e) {
		let key = this.getSetKey();
		let value = e.target.value;
		this.context.executeAction(newActions.updateField, {key, value});
	}
	
	render() {
		return (
			<div>
				<label>
			    {this.props.title}
				<textarea 
					type="text"
					defaultValue={this.getValue()}
					onChange={this.handleChange} />
				</label>
			</div>
		);
	}
}

export default TextArea;