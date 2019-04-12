class Company < ApplicationRecord
  has_many :favorites
  has_many :users, through: :favorites
  has_many :financial_periods 
  belongs_to :industry 
  belongs_to :sector
end
