class Conclusion
  include Mongoid::Document
  
  field :summary, type: String
  embedded_in :study
  
  def self.get_from_params(params)
    @conclusion = Conclusion.new
    @conclusion.summary = params[:summary]
    
    return @conclusion
  end
end
