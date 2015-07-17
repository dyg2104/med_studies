module StudiesConcern
  extend ActiveSupport::Concern
  
  def self.form_parser(params)
    @study = Study.new
    @study.title = params["title"]
    @study.authors = params["authors"]
    @study.description = params["description"]
    @study.trials = params["trials"]
    @study.involved_parties = params["involvedParties"]
    @study.references = params["references"]
    
    @disease = self.get_disease_from_params(params)
    @study.diseases = [@disease]
    
    @methodology_params = params["methodology"]
    @study.methodology = self.get_methodology_from_params(@methodology_params)
    
    @measurement_params = params["measurement"]
    @study.measurement = self.get_measurement_from_params(@measurement_params)
    
    @conclusion_params = params["conclusion"]
    @study.conclusion = self.get_conclusion_from_params(@conclusion_params)
    
    @control_groups_params = params["controlGroups"]
    @study.control_groups = self.get_control_groups_from_params(@control_groups_params)
    
    @total_datum_params = params["totalData"]
    @study.total_datum = self.get_total_datum_from_params(@total_datum_params)
    
    return @study
  end
  
  def self.get_disease_from_params(params)
    @disease = Disease.new
    @disease.name = params["diseaseName"]
    @disease.complications = params["complications"]
    @disease.current_treatments = params["currentTreatments"]
    
    return @disease
  end
  
  def self.get_methodology_from_params(params)
    @methodology = Methodology.new
    @methodology.design = params["design"]
    @methodology.diagnosis = params["diagnosis"]
    @methodology.primary_endpoint = params["primaryEndpoint"]
    @methodology.secondary_endpoints = params["secondaryEndpoints"]
    
    return @methodology
  end
  
  def self.get_measurement_from_params(params)
    @measurement = Measurement.new
    @measurement.statistical_analysis = params["statisticalAnalysis"]
    return @measurement
  end
  
  def self.get_conclusion_from_params(params)
    @conclusion = Conclusion.new
    @conclusion.summary = params["summary"]
    
    return @conclusion
  end
  
  def self.get_control_groups_from_params(params)
    @control_groups = [];
    
    params.each do |param|
      @control_group = ControlGroup.new
      @control_group.name = param["name"]
      @control_group.num_patients = param["numPatients"]
      @control_group.num_men = param["numMen"]
      @control_group.num_women = param["numWomen"]
      @control_group.methodology = param["methodology"]
      @control_group.measurement = param["measurement"]
      
      @control_groups.push(@control_group)
    end
    
    return @control_groups
  end
  
  def self.get_total_datum_from_params(params)
    @total_datum = TotalDatum.new
    @total_datum.num_patients = params["numPatients"]
    @total_datum.num_men = params["numMen"]
    @total_datum.num_women = params["numWomen"]
    @total_datum.methodology = params["methodology"]
    @total_datum.measurement = params["measurement"]
    
    return @total_datum
  end
end
