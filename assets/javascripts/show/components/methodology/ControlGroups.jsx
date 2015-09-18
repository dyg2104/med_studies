const React         = require('react');
const ControlGroup  = require('./ControlGroup.jsx');

class ControlGroups extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let controlGroups = this.props.formArr || [];
		let controlGroupsMarkup = controlGroups.map((controlGroup) => {
			return <ControlGroup formObj={controlGroup} />;
		});
		
		return (
			<div>
				<div>Control Groups</div>
				<div>{controlGroupsMarkup}</div>
			</div>
		);	
	}
}

export default ControlGroups;