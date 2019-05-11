class User < ApplicationRecord
  attr_accessor :current_auth_token
  has_many :favorites
  has_many :companies, through: :favorites
  has_secure_password
  serialize :custom_fields
  
  def set_custom_fields(type='save')
    self.custom_fields = {
      "iS" => {
        'totalrevenue'=> ['Revenue', true],
        'costofrevenue'=> ['COGS', false],
        'grossprofit'=> ['Gross Profit', false],
        'researchdevelopmentexpense'=> ['R&D', false],
        'ebit'=> ['EBIT', true],
        'interestexpense'=> ['Interest Expense', true],
        'incomebeforetaxes'=> ['Pre-Tax Income', false],
        'netincome'=> ['Net Income', true]
      },
      "bS" => {
        'cashandcashequivalents'=> ['Cash and Equivalents', true],
        'inventoriesnet'=> ['Inventories', false],
        'totalcurrentassets'=> ['Total Current Assets', true],
        'propertyplantequipmentnet'=> ['PP&E, Net', false],
        'intangibleassets'=> ['Intangible Assets', false],
        'goodwill'=> ['Goodwill', false],
        'totalassets'=> ['Total Assets', true],
        'totalshorttermdebt'=> ['S-T Debt', true],
        'totalcurrentliabilities'=> ['Total Current Liabilities', true],
        'totallongtermdebt'=> ['L-T Debt', true],
        'totalliabilities'=> ['Total Liabilities', true],
        'retainedearnings'=> ['Retained Earnings', false],
        'totalstockholdersequity'=> ['Total Shareholder Equity', true]
      },
      "cF" => {
        'cashfromoperatingactivities'=> ['Cash from Operating Activities', true],
        'cashfrominvestingactivities'=> ['Cash from Investing Activities', true],
        'cashfromfinancingactivities'=> ['Cash from Financing Activities', true],
        'capitalexpenditures'=> ['Capital Expenditures', false],
        'cfdepreciationamortization'=> ['Depreciation & Amortization', false],
        'netchangeincash'=> ['Net Change in Cash', false]
      },
      "pI" => {
        'periodenddate'=> ['Fiscal Year End Date', true],
        'fiscalyear'=> ['Fiscal Year', true],
        'formtype'=> ['Form Type', true],
        'audited'=>['Audited', false],
        'original'=>['Original', false],
        'amended'=> ['Amended', false],
        'currencycode'=> ['Currency Code', true],
        'usdconversionrate'=> ['Conversion Rate', true]
      }
    } 
    self.save unless type == 'no-save'
    return self.custom_fields
  end 

end 
