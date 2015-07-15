class Disease
  include Mongoid::Document
  
  field :name, type: String
  field :complications, type: Array
  field :current_treatments, type: Array
  
  has_and_belongs_to_many :studies
  
  def self.get_from_params(params)
    @disease = Disease.new
    @disease.name = params[:diseaseName]
    @disease.complications = params[:complications]
    @disease.current_treatments = params[:currentTreatments]
    
    return @disease
  end
end
