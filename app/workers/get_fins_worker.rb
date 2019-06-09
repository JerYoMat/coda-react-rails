class GetFinsWorker
  include Sidekiq::Worker
  sidekiq_options retry: false




  def perform_async
    companies = []
    Company.all.each do |c|
      if c.financials.count == 0
        companies.push(c.id)
      end
    end

    until companies.count < 100 do
      cid = companies.sample
      company = Company.find(cid)
      company.create_fins
      companies.delete(cid)
      sleep rand(1..10)
    end


  end



end
