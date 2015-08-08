class StudiesController < ApplicationController
  include StudiesConcern
  
  skip_before_filter  :verify_authenticity_token
    
  def index
    render "index"
  end
  
  def new
    render "new"
  end
  
  def create
    @form_params = JSON.parse(request.raw_post)
    @study = StudiesConcern.form_parser(@form_params)
    @study.save!
    render json: {success: true}
  end
  
  def show
    render "show"
  end
  
  def search
    #Figure out how to index disease info 
    
    @results = Study.search query: {
      bool: {
        should: [
          { match: { title: "" } },
          { match: { authors: "" } },
          { match: { description: "" } },
          { match: { trials: "" } },
          { match: { involved_parties: "" } },
          { match: { references: "" } },
          { match: { "methodology.design" => "" } },
          { match: { "methodology.diagnosis" => "" } },
          { match: { "methodology.primary_endpoint" => "" } },
          { match: { "methodology.secondary_endpoints" => "" } },
          { match: { "measurement.statistical_analysis" => "" } },
          { match: { "conclusion.summary" => "" } },
          { match: { "control_groups.name" => "" } },
          { match: { "control_groups.num_patients" => "" } },
          { match: { "control_groups.num_men" => "" } },
          { match: { "control_groups.num_women" => "" } },
          { match: { "control_groups.methodology.eligibilityCriteria.name" => "" } },
          { match: { "control_groups.methodology.eligibilityCriteria.units" => "" } },
          { match: { "control_groups.methodology.eligibilityCriteria.low" => "" } },
          { match: { "control_groups.methodology.eligibilityCriteria.high" => "" } },
          { match: { "control_groups.methodology.patientCharacteristics.name" => "" } },
          { match: { "control_groups.methodology.patientCharacteristics.units" => "" } },
          { match: { "control_groups.methodology.patientCharacteristics.low" => "" } },
          { match: { "control_groups.methodology.patientCharacteristics.high" => "" } },
          { match: { "control_groups.measurement.medications.name" => "" } },
          { match: { "control_groups.measurement.medications.units" => "" } },
          { match: { "control_groups.measurement.medications.low" => "" } },
          { match: { "control_groups.measurement.medications.high" => "" } },
          { match: { "control_groups.measurement.adverseEvents.name" => "" } },
          { match: { "control_groups.measurement.adverseEvents.units" => "" } },
          { match: { "control_groups.measurement.adverseEvents.low" => "" } },
          { match: { "control_groups.measurement.adverseEvents.high" => "" } },
          { match: { "control_groups.measurement.patientData.name" => "" } },
          { match: { "control_groups.measurement.patientData.units" => "" } },
          { match: { "control_groups.measurement.patientData.low" => "" } },
          { match: { "control_groups.measurement.patientData.high" => "" } },
          { match: { "total_data.methodology.eligibilityCriteria.name" => "" } },
          { match: { "total_data.methodology.eligibilityCriteria.units" => "" } },
          { match: { "total_data.methodology.eligibilityCriteria.low" => "" } },
          { match: { "total_data.methodology.eligibilityCriteria.high" => "" } },
          { match: { "total_data.methodology.patientCharacteristics.name" => "" } },
          { match: { "total_data.methodology.patientCharacteristics.units" => "" } },
          { match: { "total_data.methodology.patientCharacteristics.low" => "" } },
          { match: { "total_data.methodology.patientCharacteristics.high" => "" } },
          { match: { "total_data.measurement.medications.name" => "" } },
          { match: { "total_data.measurement.medications.units" => "" } },
          { match: { "total_data.measurement.medications.low" => "" } },
          { match: { "total_data.measurement.medications.high" => "" } },
          { match: { "total_data.measurement.adverseEvents.name" => "" } },
          { match: { "total_data.measurement.adverseEvents.units" => "" } },
          { match: { "total_data.measurement.adverseEvents.low" => "" } },
          { match: { "total_data.measurement.adverseEvents.high" => "" } },
          { match: { "total_data.measurement.patientData.name" => "" } },
          { match: { "total_data.measurement.patientData.units" => "" } },
          { match: { "total_data.measurement.patientData.low" => "" } },
          { match: { "total_data.measurement.patientData.high" => "" } }
        ]
      }
    } 
    
    
  end
end