class GetFinsWorker
  include Sidekiq::Worker




  def perform_async(company)
    company.create_fins
  end



end
