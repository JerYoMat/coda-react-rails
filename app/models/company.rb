require 'rest-client'
require 'json'
require 'erb'

class Company < ApplicationRecord
  include ERB::Util
  include ActionView::Helpers::NumberHelper
  has_many :favorites
  has_many :financials


  def get_stock_data
    url = "#{ENV['ALPHA_URL']}?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=#{url_encode(self.primarysymbol)}&apikey=#{ENV['ALPHA_KEY']}"
    response = RestClient::Request.execute(
      method: :get,
      url: url
    )
    return response
  end

  def create_fins
    response = self.get_data
    fins = self.create_fins_from_json(response)
    return fins
  end


  def get_data
    url = self.compose_url
    response = RestClient::Request.execute(
      method: :get,
      url: url
    )
    return response
  end


  def create_fins_from_json(json)
    self.normalize_data(json).each do |one_year_data|
      fin = self.financials.build()
      one_year_data.each do |key, value|
        if Financial.column_names.include? key
          if key != 'fiscalyear'
          if value.is_a? Numeric
            value = number_to_currency((value/1000000), negative_format: "(%n)", precision: 2, format: "%n")
          end
        end
          fin[key] = value
        end
      end
      fin.save
    end
  end



  def compose_url
      ENV['EDGAR_URL'] + "?primarysymbols=#{self.primarysymbol}&appkey=#{ENV['EDGAR_KEY']}"
  end

  #Functional - Needs refactoring
  #returns an array where each item is a financial period
  def normalize_data(response)
    raw_data =JSON.parse(response)
    rows = raw_data['result']['rows']
    sanitized_data = []
    rows.each do |row|
      newObj = {}
      row['values'].each do |pair|
          newObj[pair['field']] = pair['value']
      end
      sanitized_data.push(newObj)
    end
      return sanitized_data
  end

end
