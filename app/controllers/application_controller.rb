class ApplicationController < ActionController::API
  def fallback_index_html
    redirect_to 'https://coda-financial.herokuapp.com/'
  end

end
