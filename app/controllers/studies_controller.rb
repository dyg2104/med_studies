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
    @study = StudiesConcern.form_parser(params)
    
    render json: {success: true}
  end
  
  def show
    render "show"
  end
end
