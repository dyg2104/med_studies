class ControlGroup
  include Mongoid::Document
  
  field :name, type: String
  field :num_patients, type: Integer
  field :num_men, type: Integer
  field :num_women, type: Integer
  field :methodology, type: Hash
  field :measurement, type: Hash
  
  embedded_in :study
  
  def self.get_from_params(params)
    @control_groups = [];
    @length = params.length
    
    for i in 0...@length
      param = params[i.to_s]
      @control_group = ControlGroup.new
      @control_group.name = param[:name]
      @control_group.num_patients = param[:numPatients]
      @control_group.num_men = param[:numMen]
      @control_group.num_women = param[:numWomen]
      @control_group.methodology = param[:methodology]
      @control_group.measurement = param[:measurement]
      
      @control_groups.push(@control_group)
    end
    
    return @control_groups
  end
end
