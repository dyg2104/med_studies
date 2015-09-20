const React     = require('react');
const newStore  = require('./stores/newStore.es.js');
const newActions = require('./actions/newActions.es.js');

class NewWrapper extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		newActions.updateSize('controlGroups:0:methodology:eligibilityCriteria');
		return (
			<div>newBoa</div>
		);
	}
}

export default NewWrapper;
