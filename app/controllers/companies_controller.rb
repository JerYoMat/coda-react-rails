class CompaniesController < ApplicationController
  before_action :authorize_request, except: [:index, :show_or_create, :stock_data]
  def index
    render json:  Company.all
  end

  def show_or_create
    @company = Company.find(params['id'])
    if @company && @company.financials.count == 0
      @company.create_fins
    end
    financials = {@company.id => {}}
    @company.financials.each do |singleYear|
      year = singleYear['fiscalyear'].remove(',').to_i
      financials[@company.id][year] = singleYear
    end
    render json: financials
  end

  def stock_data
    @company = Company.find(params['id'])
    @data = @company.get_stock_data
    render json: @data
  end

private
  def company_params
    params.permit(:id, :ticker, :primarysymbol)
  end


end
