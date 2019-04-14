require 'rest-client'
require 'json'
require 'erb'
require 'date'


module Api 
  module V1
    class CompaniesController < ApplicationController
      include ERB::Util
      def index
        @companies = Company.all
        render json: @companies
      end 
    end 


    end
end 
