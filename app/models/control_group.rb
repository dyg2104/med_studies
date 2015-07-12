class ControlGroup
  include Mongoid::Document
  
  field :name, type: String
  field :num_patients, type: Integer
  field :num_men, type: Integer
  field :num_women, type: Integer
  field :methodology, type: Hash
  field :measurement, type: Hash
end
