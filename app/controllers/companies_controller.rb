class CompaniesController < ApplicationController
      
  def index
    render json:  Company.all
  end 

  def show_or_create 
    @company = Company.find_by(primarysymbol: params['ticker']) 
    if @company && @company.financials.count > 0 
      render json: @company.financials
    elsif @company 
      @company.create_fins
      render json: @company.financials
    end  
  end
  
  def stock_data
    @company = Company.find_by(primarysymbol: params['ticker'])
    @data = @company.get_stock_data
    render json: @data
  end 


private
  def company_params
    params.permit(:id, :ticker, :primarysymbol)
  end 

  
end 
