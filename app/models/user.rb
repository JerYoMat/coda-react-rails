class User < ApplicationRecord
  attr_accessor :current_auth_token
  has_many :favorites
  has_many :companies, through: :favorites
  has_secure_password
  serialize :custom_fields
  
  def set_custom_fields
    self.custom_fields = {
      "iS" => {
        'totalrevenue'=> ['Revenue', 1],
        'costofrevenue'=> ['COGS', 0],
        'grossprofit'=> ['Gross Profit', 0],
        'researchdevelopmentexpense'=> ['R&D', 0],
        'ebit'=> ['EBIT', 1],
        'interestexpense'=> ['Interest Expense', 1],
        'incomebeforetaxes'=> ['Pre-Tax Income', 0],
        'netincome'=> ['Net Income', 1]
      }
    }
    self.save
  end 

end 
