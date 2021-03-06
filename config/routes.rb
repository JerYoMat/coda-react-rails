Rails.application.routes.draw do
      scope :api do 
            scope :v1 do
                  resources :companies, only: [:index]
                  resources :users, only: [:create, :update, :destroy]
                  resources :favorites, only: [:create, :destroy]
                  get '/companies/:id', to: 'companies#show_or_create'
                  get '/users/defaults', to: 'users#default_fields'
                  post '/companies/:id/stocks', to: 'companies#stock_data'
                  post   'auth/login',   to: 'authentication#authenticate'
            end       
      end 
end 

