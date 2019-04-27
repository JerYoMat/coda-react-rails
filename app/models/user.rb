class User < ApplicationRecord
  attr_accessor :current_auth_token
  has_many :favorites
  has_many :companies, through: :favorites
  has_secure_password
end 