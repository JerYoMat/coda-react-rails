require pry
Rails.application.routes.draw do
      
      namespace :api do 
            namespace :v1 do
                  
                  resources :companies, only: [:index, :show]
                  resources :users, only: [:create, :update, :destroy]
                  resources :favorites, only: [:create, :destroy]
                  post   '/login',   to: 'sessions#create'
                  delete '/logout',  to: 'sessions#destroy'
            end       
      end 
      get '/*path/*path', to: 'application#send_back_to_heroku'
      get '/*path', to: 'application#send_back_to_heroku'
      
end 