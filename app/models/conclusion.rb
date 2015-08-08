class Conclusion
  include Mongoid::Document
  
  field :summary, type: String
  embedded_in :study
end
