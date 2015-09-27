const React                = require('react');
const BaseComponent        = require('./BaseComponent.jsx');
const TextField            = require('./TextField.jsx');
const factoryCGCollection  = require('./factoryCGCollection.jsx');

const Before               = require('./Before.jsx');
const After                = require('./After.jsx');
const Difference           = require('./Difference.jsx');

const Befores              = factoryCGCollection(Before);
const Afters               = factoryCGCollection(After);
const Differences          = factoryCGCollection(Difference);

class CGCollectionSub extends BaseComponent {
	constructor(props) {
		super(props);
	}
	
	render() {
		let subValue = this.getValue();
		let setKey = this.getSetKey();
		
		return (
			<div>
				<TextField 
					formObj={subValue}
					getKey="name"
					parentSetKey={setKey}
					setKey="name"
					title="Name" />
				<TextField 
					formObj={subValue}
					getKey="units"
					parentSetKey={setKey}
					setKey="units"
					title="Units" />
				<TextField 
					formObj={subValue}
					getKey="type"
					parentSetKey={setKey}
					setKey="type"
					title="Type" />
				<Befores 
					formObj={subValue} 
					getKey="controlGroups" 
					parentSetKey={setKey}
					setKey="controlGroups"
					title="Befores" />
				<Afters 
					formObj={subValue} 
					getKey="controlGroups" 
					parentSetKey={setKey}
					setKey="controlGroups"
					title="Afters" />
				<Differences 
					formObj={subValue} 
					getKey="controlGroups" 
					parentSetKey={setKey}
					setKey="controlGroups"
					title="Differences" />
			</div>
		);
	}
}

export default CGCollectionSub;