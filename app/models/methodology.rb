class Methodology
  include Mongoid::Document
  
  field :design, type: Array
  field :diagnosis, type: String
  field :primary_endpoint, type: String
  field :secondary_endpoints, type: Array
  
  embedded_in :study
  
  def self.get_from_params(params)
    @methodology = Methodology.new
    @methodology.design = params[:design]
    @methodology.diagnosis = params[:diagnosis]
    @methodology.primary_endpoint = params[:primaryEndpoint]
    @methodology.secondary_endpoints = params[:secondaryEndpoints]
    
    return @methodology
  end
end
