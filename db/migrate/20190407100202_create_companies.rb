class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :companyname
      t.string :primarysymbol
      t.string :primaryexchange
      t.belongs_to :industry 
      t.belongs_to :sector
      t.belongs_to :user
      t.timestamps
    end
  end

end
