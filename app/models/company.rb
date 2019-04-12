class Company < ApplicationRecord
  include ERB::Util
  has_many :favorites
  has_many :users, through: :favorites
  has_many :financial_periods 
  belongs_to :industry 
  belongs_to :sector


  def current_end_date
    dates = []
    self.financial_periods.each do |fp|
      dates.push(fp.periodenddate)
    end 
    return dates.max
  end

  def needed_num_periods(max = 5)
    if self.financial_periods.count == 0
      return max
    else 
    current_end = self.current_end_date
    num_years_missing = ((Date.today - current_end)/365).floor
      if num_years_missing > max
        return max 
      elsif num_years_missing == 0
        return false 
      else
        return num_years_missing
      end 
    end 
  end 

  def encoded_ticker
    ticker = self.primarysymbol
    return url_encode(ticker)
  end 



  def data_url(numperiods=5)
    url="https://datafied.api.edgar-online.com/v2/corefinancials/ann?primarysymbols=#{self.primarysymbol}&numperiods=#{numperiods}&fields=receiveddate,periodlengthcode,periodlength,periodenddate,fiscalyear,fiscalquarter,totalrevenue,costofrevenue,grossprofit,researchdevelopmentexpense,ebit,incomebeforetaxes,netincome,cashandcashequivalents,cashcashequivalentsandshortterminvestments,othercurrentassets,inventoriesnet,totalcurrentassets,intangibleassets,propertyplantequipmentnet,goodwill,otherassets,totalassets,othercurrentliabilities,totalshorttermdebt,totalcurrentliabilities,otherliabilities,totallongtermdebt,totalliabilities,retainedearnings,totalstockholdersequity,cashfromoperatingactivities,cashfrominvestingactivities,cashfromfinancingactivities,capitalexpenditures,cfdepreciationamortization,netchangeincash,formtype,audited,original,amended,preliminary,currencycode,crosscalculated,usdconversionrate&appkey=#{ENV['EDGAR_KEY']}"
    return url
  end 
  





end
