const React          = require('react');
const findNameSpace  = require('find-namespace-value');

module.exports = function(Component, key) {
	class ControlGroupTotalData extends React.Component {
		constructor(props) {
			super(props);
		}
	
		render() {
			let controlGroups = this.props.controlGroups;
			let totalData = this.props.totalData;
			
			let field = findNameSpace(key, totalData);		
			let length = field && field.length ? field.length : 0;
			let markup = [];
		
			for (let i = 0; i < length; i++) {
				markup.push(
					<Component
						controlGroups={controlGroups} 
						totalData={totalData} 
						index={i} />
				);
			}
		
			return (
				<div>
					<div>{this.props.title}</div>
					<div>{markup}</div>
				</div>
			);
		}
	}
	
	return ControlGroupTotalData;	
}
