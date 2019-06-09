class GetFinsWorker
  include Sidekiq::Worker




  def perform(company)
    company.create_fins
  end



end
