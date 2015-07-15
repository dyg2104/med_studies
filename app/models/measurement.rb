class Measurement
  include Mongoid::Document
  
  field :statistical_analysis, type: String
  embedded_in :study
  
  def self.get_from_params(params)
    @measurement = Measurement.new
    @measurement.statistical_analysis = params[:statisticalAnalysis]
    return @measurement
  end
end
