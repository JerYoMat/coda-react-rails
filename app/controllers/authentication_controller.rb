class AuthenticationController < ApplicationController
  skip_before_action :authorize_request, only: :authenticate
  # return auth token once user is authenticated
  def authenticate
    user = User.find_by(email: auth_params[:email])
    auth_token =
      AuthenticateUser.new(auth_params[:email], auth_params[:password]).call
      response = { :info => {:id => user.id, :email => user.email, :username => user.username}, 
      :message => 'welcome',
      :auth_token => auth_token,
      :custom_fields => user.custom_fields}
    json_response(response, :created)
  end

  private

  def auth_params
    params.permit(:email, :password)
  end
end

