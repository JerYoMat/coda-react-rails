class Company < ApplicationRecord
  has_many :financial_periods 
  belongs_to :industry 
  belongs_to :sector
end
