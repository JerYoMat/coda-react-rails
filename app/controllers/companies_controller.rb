class CompaniesController < ApplicationController
      
  def index
    render json:  @companies
  end 

  #Companies are seeded ahead of time and are a list that is passed to the client f
  def show_or_create 
    @company = Company.find_by(primarysymbol: params['id']) 
    if @company && @company.financials.count > 0 
      render json: @company.financials
    elsif @company 
      @company.create_fins
      render json: @company.financials
    end  
  end 


private
  def company_params
    params.permit(:id)
  end 

  
end 
