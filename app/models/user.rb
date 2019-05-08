class User < ApplicationRecord
  attr_accessor :current_auth_token
  has_many :favorites
  has_many :companies, through: :favorites
  has_secure_password
  serialize :custom_fields
  
  def set_custom_fields
    self.custom_fields = {
      "iS" => {
        'totalrevenue'=> ['Revenue', 'true'],
        'costofrevenue'=> ['COGS', 'true'],
        'grossprofit'=> ['Gross Profit', 'true'],
        'researchdevelopmentexpense'=> ['R&D', 'true'],
        'ebit'=> ['EBIT', 'true'],
        'interestexpense'=> ['Interest Expense', 'true'],
        'incomebeforetaxes'=> ['Pre-Tax Income', 'true'],
        'netincome'=> ['Net Income', 'true']
      }
    }
  end 

end 
