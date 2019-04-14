Rails.application.routes.draw do
      namespace :api do 
            namespace :v1 do
                  get '/companies/:ticker', to: 'companies#fins'
                  resources :companies, only: [:index]
              
              resources :users, only: [:create, :update, :destroy]
              resources :favorites, only: [:create, :destroy]
              post   '/login',   to: 'sessions#create'
              delete '/logout',  to: 'sessions#destroy'
            end       
      end 
end 