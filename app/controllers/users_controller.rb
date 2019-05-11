require 'pry'
require 'json'
class UsersController < ApplicationController
  before_action :authorize_request, except: [:create, :default_fields]

  def default_fields
    user = User.new 
    fields = user.set_custom_fields('no-save')
    render json: fields
  end 

  def create
    user = User.create!(user_params)
    user.set_custom_fields
    auth_token = AuthenticateUser.new(user.email, user.password).call
    response = { :info => {:id => user.id, :email => user.email, :username => user.username}, 
      :message => Message.account_created,
      :auth_token => auth_token,
      :custom_fields => user.custom_fields}
    json_response(response, :created)
  end


  def update
    if @current_user.update_attributes({:custom_fields => params["custom_fields"], :email => params["email"], :username => ["username"]})
      response = { :info => {:id => @current_user.id, :email => @current_user.email, :username => @current_user.username}, 
      :message => Message.account_updated,
      :custom_fields => @current_user.custom_fields}
      json_response(response)
    end
  end


  private

end
