class StudiesController < ApplicationController
  def index
    render "index"
  end
  
  def new
    render "new"
  end
  
  def create
  end
  
  def show
    render "show"
  end
end
