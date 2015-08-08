class Disease
  include Mongoid::Document
  
  field :name, type: String
  field :complications, type: Array
  field :current_treatments, type: Array
  
  has_and_belongs_to_many :studies
end
