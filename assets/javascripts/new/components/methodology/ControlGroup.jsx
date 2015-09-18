const React          = require('react');
const BaseComponent  = require('../shared/BaseComponent.jsx');
const TextField      = require('../shared/TextField.jsx');

class ControlGroup extends BaseComponent {	
	constructor(props) {
		super(props);
	}
	
	render() {
		let controlGroup = this.props.controlGroup;
		let setterKeys = this.getSetterKeys();
		
		return (
			<div>
				<TextField 
					formObj={controlGroup}
					getterKey="name" 
					parentSetterKeys={setterKeys}
					setterKeys="name"
					title="Name" />
				<TextField 
					formObj={controlGroup}
					getterKey="numPatients" 
					parentSetterKeys={setterKeys}
					setterKeys="numPatients"
					title="Number of Patients" />
				<TextField 
					formObj={controlGroup}
					getterKey="numMen" 
					parentSetterKeys={setterKeys}
					setterKeys="numMen"
					title="Number of Men" />
				<TextField 
					formObj={controlGroup}
					getterKey="numWomen" 
					parentSetterKeys={setterKeys}
					setterKeys={"numWomen"}
					title="Number of Women" />
			</div>
        );
    }
};

export default ControlGroup;