class UsersController < ApplicationController
  before_action :authorize_request, only: :destroy

  
  def create
    user = User.create!(user_params)
    auth_token = AuthenticateUser.new(user.email, user.password).call
    response = { message: Message.account_created, auth_token: auth_token }
    json_response(response, :created)
  end

  private

  def user_params
    params.permit(
      :username,
      :email,
      :password
    )
  end
end
