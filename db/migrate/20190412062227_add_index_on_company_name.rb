class AddIndexOnCompanyName < ActiveRecord::Migration[5.2]
  def change
    add_index :companies, :companyname
  end
end
