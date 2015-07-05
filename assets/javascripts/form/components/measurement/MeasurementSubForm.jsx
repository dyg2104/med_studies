var React         = require('react');
var StudyActions  = require('../../actions/StudyActions');
var Medication    = require('./Medication.jsx');
var FactoryCGTD   = require('../FactoryCGTD.jsx');

function ecClickHandler(e) {
	e.preventDefault();
	StudyActions.updateEligibilityCriteriaSize();
}

var Medications = FactoryCGTD(Medication, 'measurement', 'medications', ecClickHandler);

var MeasurementSubForm = React.createClass({
	render: function () {
		var methodology = this.props.study['methodology'];
		var controlGroups = this.props.study['controlGroups'];
		var totalData = this.props.study['totalData'];
		
		return (
			<div>
				<div>measurement</div>
				<Medications 
					controlGroups={controlGroups}
					totalData={totalData}
					title="Medications" />
			</div>
		)
	}
});

module.exports = MeasurementSubForm;