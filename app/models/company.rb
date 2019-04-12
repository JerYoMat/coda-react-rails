class Company < ApplicationRecord
  belongs_to :user 
  has_many :financial_periods 
  belongs_to :industry 
  belongs_to :sector
end
