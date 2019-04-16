class CacheWarmerWorker
  include Sidekiq::Worker

  def perform
    Company.find_each do |company|
      serializer = post.active_model_serializer.new company
      serializer.to_json
    end
  end
end
