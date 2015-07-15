class Study
  include Mongoid::Document
  
  field :title, type: String
  field :authors, type: Array
  field :description, type: String
  field :trials, type: Array
  field :involved_parties, type: Array
  field :references, type: Array
  
  has_and_belongs_to_many :diseases
  
  embeds_one  :methodology
  embeds_one  :measurement
  embeds_one  :conclusion
  embeds_many :control_groups
  embeds_one  :total_datum
  
  def self.get_from_params(params)
    @study = Study.new
    @study.title = params[:title]
    @study.authors = params[:authors]
    @study.description = params[:description]
    @study.trials = params[:trials]
    @study.involved_parties = params[:involvedParties]
    @study.references = params[:references]
    
    @disease = Disease.get_from_params(params)
    @study.diseases = [@disease]
    
    @methodology_params = params[:methodology]
    @study.methodology = Methodology.get_from_params(@methodology_params)
    
    @measurement_params = params[:measurement]
    @study.measurement = Measurement.get_from_params(@measurement_params)
    
    @conclusion_params = params[:conclusion]
    @study.conclusion = Conclusion.get_from_params(@conclusion_params)
    
    @control_groups_params = params[:controlGroups]
    @study.control_groups = ControlGroup.get_from_params(@control_groups_params)
    
    @total_datum_params = params[:totalData]
    @study.total_datum = TotalDatum.get_from_params(@total_datum_params)
    
    debugger
    return @study
  end
end
