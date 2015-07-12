class Study
  include Mongoid::Document
  
  field :title, type: String
  field :authors, type: Array
  field :description, type: String
  field :disease_name, type: String
  field :complications, type: Array
  field :current_treatments, type: Array
  field :trials, type: Array
  field :involved_parties, type: Array
  field :references, type: Array
  
  has_and_belongs_to_many :diseases
  has_many :control_groups
  has_one :total_datum
  
  embeds_one :methodology
  embeds_one :measurement
  embeds_one :conclusion
end
