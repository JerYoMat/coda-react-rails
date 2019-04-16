class ApplicationController < ActionController::API
  def fallback_index_html
    redirect to "https://coda-financial.herokuapp.com/"
  end

end
