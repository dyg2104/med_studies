Rails.application.routes.draw do
  root to: 'studies#index'
  resources :studies, only: [:index, :new, :create, :show]
  
  namespace :api, :defaults => { :format => :json } do
    post '/search', to: 'search#index'
  end
end
