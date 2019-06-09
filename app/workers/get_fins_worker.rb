class GetFinsWorker
  include Sidekiq::Worker




  def perform_async

    while cid < 3001 do
      @company = Company.find(cid)
      if @company.financials.count == 0
        @company.create_fins
      end
      cid+=1
    end

  end



end
