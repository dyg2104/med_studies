const React          = require('react');
const SearchActions  = require('../../actions/SearchActions.es.js');

class TextField extends React.Component {
	constructor(props) {
		super(props)
		
		this.getValue = this.getValue.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	getValue() {
		let formObj = this.props.formObj;
		return formObj[this.props.getterKey];	
	}
	
	handleChange(e) {
		let key = this.props.setterKey;
		let value = e.target.value;
		SearchActions.updateField(key, value);
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