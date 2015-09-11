class Study
  include Mongoid::Document
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks
  
  field :title, type: String
  field :authors, type: Array
  field :description, type: String
  field :trials, type: Array
  field :involved_parties, type: Array
  field :references, type: Array
  
  embeds_one  :disease
  embeds_one  :methodology
  embeds_one  :measurement
  embeds_one  :conclusion
  embeds_many :control_groups
  embeds_one  :total_datum
  
  def as_indexed_json(options={})
    as_json(except: [:id, :_id])
  end
end
