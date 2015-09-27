const React                = require('react');
const BaseComponent        = require('./BaseComponent.jsx');
const TextField            = require('./TextField.jsx');
const factoryCGCollection  = require('./factoryCGCollection.jsx');

const DataSDDifference     = require('./DataSDDifference.jsx');
const DataSDDifferences    = factoryCGCollection(DataSDDifference);

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
				<DataSDDifferences 
					formObj={subValue} 
					getKey="controlGroups" 
					parentSetKey={setKey}
					setKey="controlGroups"
					title="Data SDs" />
			</div>
		);
	}
}

export default CGCollectionSub;