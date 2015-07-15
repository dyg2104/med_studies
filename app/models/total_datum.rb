class TotalDatum
  include Mongoid::Document
   
  field :num_patients, type: Integer
  field :num_men, type: Integer
  field :num_women, type: Integer
  field :methodology, type: Hash
  field :measurement, type: Hash
  
  embedded_in :study
  
  def self.get_from_params(params)
    @total_datum = TotalDatum.new
    @total_datum.num_patients = params[:numPatients]
    @total_datum.num_men = params[:numMen]
    @total_datum.num_women = params[:numWomen]
    @total_datum.methodology = params[:methodology]
    @total_datum.measurement = params[:measurement]
    
    return @total_datum
  end
end
