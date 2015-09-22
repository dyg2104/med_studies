const React = require('react');

module.exports = function(Component, firstKey, secondKey) {
	class CGTD extends React.Component {
		constructor(props) {
			super(props);
			this.getCGKeys = this.getCGKeys.bind(this);
			this.getTDKey = this.getTDKey.bind(this);
			this.getTDValue = this.getTDValue.bind(this);
			this.getClickKeys = this.getClickKeys.bind(this);
		}
		
		getCGValue() {
			
		}
		
		getTDValue() {
			let totalData = this.props.totalData;
			let totalDataValue = totalData && totalData.value ? totalData.value : {};
			let first = totalDataValue ? totalDataValue[firstKey] : {};
			let firstValue = first && first.value ? first.value : {};
			let second = firstValue ? firstValue[secondKey] : {};
			let secondValue = second && second.value ? second.value : [];
			
			return secondValue;
		}
		
		getCGKeys(i) {
			
		}
		
		getTDKey(i) {
			return 'totalData:' + firstKey + ':' + secondKey + ':' + i;
		}
		
		getClickKeys() {
			let controlGroups = this.props.controlGroups;
			let controlGroupsValue = controlGroups && controlGroups.value ? controlGroups.value : [];
			let controlGroupsSize = controlGroupsValue.length ? controlGroupsValue.length : 1;
			let clickKeys = [];
			
			for (let i = 0; i < controlGroupsSize; i++) {
				clickKeys.push('controlGroups:' + i + ':' + firstKey + ':' + secondKey);
			}
			
			clickKeys.push('totalData:' + firstKey + ':' + secondKey);
			
			return clickKeys;
		}
		
		handleClick() {
			
		}
		
		render() {
			let nodes = [];
			let tdValue = this.getTDValue();
			let arraySize = tdValue.length ? tdValue.length : 1;
			
			for (let i = 0; i < arraySize; i++) {
				nodes.push(
					<Component 
						key={i}
						controlGroups={this.props.controlGroups}
						totalData={this.props.totalData} 
						controlGroupsKeys=""
						totalDataKey={'totalData:' + firstKey + ':' + secondKey + ':' + i}
						index={i} />
				);
			}
			
			return (
				<div>
					{this.props.title}
					{nodes}
					<a href='#' onClick={this.handleClick}>+</a>
				</div>
			);
		}
	}
	
	return CGTD;
}