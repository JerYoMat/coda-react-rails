class UsersController < ApplicationController
  before_action :authorize_request, except: :create

  def create
    user = User.create!(user_params)
    auth_token = AuthenticateUser.new(user.email, user.password).call
    response = { user: user, message: Message.account_created, auth_token: auth_token }
    json_response(response, :created)
  end

  def show
  end 

  def update
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
