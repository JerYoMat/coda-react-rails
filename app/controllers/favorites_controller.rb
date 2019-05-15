
class FavoritesController < ApplicationController
  def create
    favorite = @current_user.favorites.build(company_id: params['companyId'])
    if favorite.save
      render json: favorite
    end 
  end 

  def destroy
    favorite = @current_user.favorites.find(params['favoriteId'])
    company_id = favorite.company_id 
    favorite.destroy 
    render json: company_id
  end 

end
