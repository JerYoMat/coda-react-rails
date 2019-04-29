require 'rest-client'
require 'json'
require 'pry'
class Company < ApplicationRecord
  has_many :favorites
  has_many :financials  


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
        if Company.column_names.include? key
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
