class Measurement
  include Mongoid::Document
  
  field :statistical_analysis, type: String
  embedded_in :study
end
