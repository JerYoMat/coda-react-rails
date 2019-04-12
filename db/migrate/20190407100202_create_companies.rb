class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :companyname
      t.string :primarysymbol
      t.string :primaryexchange
      t.belongs_to :industry 
      t.belongs_to :sector
<<<<<<< HEAD
=======
      t.bigint :market_cap
      t.date :market_cap_date
>>>>>>> parent of ca15281... updated company model to have a user, added index to companies table for faster search and recreated schema and updated seed accordingly
      t.timestamps
    end
  end
end
