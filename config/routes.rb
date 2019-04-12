Rails.application.routes.draw do
 
      resources :companies, only: [:index]
      get '/companies/:ticker', to: 'companies#show'
    

end 