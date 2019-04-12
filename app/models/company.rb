class Company < ApplicationRecord
  has_many :financial_periods 
  belongs_to :industry 
  belongs_to :sector

=begin 
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
=end 





end
