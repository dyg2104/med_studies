class StudiesController < ApplicationController
  include StudiesConcern
  
  skip_before_filter  :verify_authenticity_token
    
  def index
    render "index"
  end
  
  def new
    render "new"
  end
  
  def create
    @form_params = JSON.parse(request.raw_post)
    @study = StudiesConcern.form_parser(@form_params)
    @study.save!
    
    render json: {success: true}
  end
  
  def show
    @id = params[:id]
    @study = Study.find(@id)
    @study_json = @study.to_json()
    render "show"
  end
end