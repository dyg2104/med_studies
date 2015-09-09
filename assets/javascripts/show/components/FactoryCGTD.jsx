const React = require('react');

module.exports = function(Component, firstKey, secondKey) {
	class ControlGroupTotalData extends React.Component {
		constructor(props) {
			super(props);
		}
	
		render() {
			let controlGroups = this.props.controlGroups;
			let totalData = this.props.totalData;
			
			let field = totalData[firstKey][secondKey];		
			let length = field.length;
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
