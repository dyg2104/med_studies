const _              = require('underscore');
const React          = require('react');
const findNameSpace  = require('find-namespace-value');

module.exports = function(key) {
	class ControlGroupTotalDataSub extends React.Component {
		constructor(props) {
			super(props);
		}
	
		render() {
			let index = this.props.index;
			let controlGroups = this.props.controlGroups;
			let totalData = this.props.totalData;
			let tdCriteria = findNameSpace(key, totalData);
			
			if (!(_.isNumber(index) && controlGroups && totalData && tdCriteria)) {
				return false;
			}
			
			let tdCriterion = tdCriteria[index];
		
			let cgBeforeDataMarkup = [];
			let cgBeforeSdMarkup = [];
		
			let cgAfterDataMarkup = [];
			let cgAfterSdMarkup = [];
		
			let cgDifferenceDataMarkup = [];
			let cgDifferenceSdMarkup = [];
		
			for (let controlGroup of controlGroups) {
				let cgCriteria = findNameSpace(key, controlGroup);
				let cgCriterion = cgCriteria[index];
			
				cgBeforeDataMarkup.push(<div>{findNameSpace('before.data', cgCriterion)}</div>);
				cgBeforeSdMarkup.push(<div>{findNameSpace('before.sd', cgCriterion)}</div>);
			
				cgAfterDataMarkup.push(<div>{findNameSpace('after.data', cgCriterion)}</div>);
				cgAfterSdMarkup.push(<div>{findNameSpace('after.sd', cgCriterion)}</div>);
			
				cgDifferenceDataMarkup.push(<div>{findNameSpace('difference.data', cgCriterion)}</div>);
				cgDifferenceSdMarkup.push(<div>{findNameSpace('difference.sd', cgCriterion)}</div>);
			}
		
			return (
				<div>
					<div>
						<div>Name</div>
						<div>{tdCriterion.name}</div>
					</div>
					<div>
						<div>Units</div>
						<div>{tdCriterion.units}</div>
					</div>
					<div>
						<div>Type</div>
						<div>{tdCriterion.type}</div>
					</div>
					<div>
						<div>Before Data</div>
						<div>
							{cgBeforeDataMarkup}
							<div>{findNameSpace('before.data', tdCriterion)}</div>
						</div>
					</div>
					<div>
						<div>Before SD</div>
						<div>
							{cgBeforeSdMarkup}
							<div>{findNameSpace('before.sd',tdCriterion)}</div>
						</div>
					</div>
					<div>
						<div>After Data</div>
						<div>
							{cgAfterDataMarkup}
							<div>{findNameSpace('after.data', tdCriterion)}</div>
						</div>
					</div>
					<div>
						<div>After SD</div>
						<div>
							{cgAfterSdMarkup}
							<div>{findNameSpace('after.sd', tdCriterion)}</div>
						</div>
					</div>
					<div>
						<div>Difference Data</div>
						<div>
							{cgDifferenceDataMarkup}
							<div>{findNameSpace('difference.data', tdCriterion)}</div>
						</div>
					</div>
					<div>
						<div>Difference SD</div>
						<div>
							{cgDifferenceSdMarkup}
							<div>{findNameSpace('difference.sd', tdCriterion)}</div>
						</div>
					</div>
				</div>
			);
		}
	}
	
	return ControlGroupTotalDataSub;
}