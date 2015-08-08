class Methodology
  include Mongoid::Document
  
  field :design, type: Array
  field :diagnosis, type: String
  field :primary_endpoint, type: String
  field :secondary_endpoints, type: Array
  
  embedded_in :study
end
