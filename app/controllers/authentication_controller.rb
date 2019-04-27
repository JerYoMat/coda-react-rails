class AuthenticationController < ApplicationController
  
  # return auth token once user is authenticated
  def authenticate
    user = User.find_by(email: auth_params[:email])
    user.current_auth_token =
      AuthenticateUser.new(auth_params[:email], auth_params[:password]).call
    render json: user 
  end

  private

  def auth_params
    params.permit(:email, :password)
  end
end

