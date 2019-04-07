require 'pry'
class UsersController < ApplicationController
  def create
    @user = User.create(email: params['email'], password: params['password'])
    log_in(@user)
    render json: @user
  end 

  

  private


  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
  def log_in(user)
    session[:user_id] = user.id
  end

end
