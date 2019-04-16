class ApplicationRecord < ActiveRecord::Base
  def self.cache_key
    Digest::MD5.hexdigest "#{scoped.maximum(:updated_at).try(:to_i)}-#{scoped.count}"
  end
  self.abstract_class = true
end
