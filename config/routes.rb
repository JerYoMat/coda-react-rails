Rails.application.routes.draw do
  resources :companies 
  resources :users, only: [:create, :update, :destroy]
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
end 