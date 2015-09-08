const React = require('react');

class ControlGroup extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let controlGroup = this.props.formObj;
		
		return (
			<div>
				<div>
					<div>Name</div>
					<div>{controlGroup.name}</div>
				</div>
				<div>
					<div>Number of Patients</div>
					<div>{controlGroup.num_patients}</div>
				</div>
				<div>
					<div>Number of Men</div>
					<div>{controlGroup.num_men}</div>
				</div>
				<div>
					<div>Number of Women</div>
					<div>{controlGroup.num_women}</div>
				</div>
			</div>	
		);
	}
}

export default ControlGroup;