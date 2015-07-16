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
end
