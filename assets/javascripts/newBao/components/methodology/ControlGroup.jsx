const React          = require('react');
const BaseComponent  = require('../shared/BaseComponent.jsx');
const TextField      = require('../shared/TextField.jsx');

class ControlGroup extends BaseComponent {	
	constructor(props) {
		super(props);
	}
	
	render() {
		let controlGroup = this.getValue(); 
		let setKey = this.getSetKey();
		
		return (
			<div>
				<TextField 
					formObj={controlGroup}
					getKey="name" 
					parentSetKey={setKey}
					setKey="name"
					title="Name" />
				<TextField 
					formObj={controlGroup}
					getKey="numPatients" 
					parentSetKey={setKey}
					setKey="numPatients"
					title="Number of Patients" />
				<TextField 
					formObj={controlGroup}
					getKey="numMen" 
					parentSetKey={setKey}
					setKey="numMen"
					title="Number of Men" />
				<TextField 
					formObj={controlGroup}
					getKey="numWomen" 
					parentSetKey={setKey}
					setKey={"numWomen"}
					title="Number of Women" />
			</div>
        );
    }
};

export default ControlGroup;