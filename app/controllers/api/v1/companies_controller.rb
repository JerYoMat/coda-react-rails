module Api 
  module V1
    class CompaniesController < ApplicationController
      include ERB::Util

      def index
        @companies = Company.all
        render json: @companies
      end 

      def create 
      @company = Company.new 
      @company.companyname = params['companyname']
      @company.primarysymbol = params['primarysymbol']
      @company.primaryexchange = params['primarysymbol']
      @company.save 
      render json: @company 
      end 

    
    end
end 
end 