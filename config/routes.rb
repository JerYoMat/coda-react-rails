Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :industries, only: [:index, :show]
      resources :companies do 
        resources :financial_periods
      end 
    end
  end
end 