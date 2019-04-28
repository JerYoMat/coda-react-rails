Rails.application.routes.draw do
      scope :api do 
            scope :v1 do
                  resources :companies, only: [:index, :show]
                  resources :users, only: [:create, :update, :destroy]
                  resources :favorites, only: [:create, :destroy]
                  post   'auth/login',   to: 'authentication#authenticate'
                  delete '/logout',  to: 'sessions#destroy'
            end       
      end 
end 

