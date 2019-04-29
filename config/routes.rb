Rails.application.routes.draw do
      scope :api do 
            scope :v1 do
                  resources :companies, only: [:index]
                  resources :users, only: [:create, :update, :destroy]
                  resources :favorites, only: [:create, :destroy]
                  get '/companies/:ticker', to: 'companies#show_or_create'
                  post   'auth/login',   to: 'authentication#authenticate'
                  delete '/logout',  to: 'sessions#destroy'
            end       
      end 
end 

