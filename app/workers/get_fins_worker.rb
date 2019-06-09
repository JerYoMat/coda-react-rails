class GetFinsWorker
  include Sidekiq::Worker
  sidekiq_options retry: false




  def perform_async

    while cid < 3001 do
      @company = Company.find(cid)
      if @company.financials.count == 0
        @company.create_fins
      end
      cid+=1
      sleep rand(1..7)
    end

  end



end
