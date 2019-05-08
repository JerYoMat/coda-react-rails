class Financial < ApplicationRecord
  belongs_to :company
  validates :periodenddate, uniqueness: { scope: :company_id} 
end
