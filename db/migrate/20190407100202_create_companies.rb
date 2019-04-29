class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :companyname
      t.string :primarysymbol
      t.string :primaryexchange
      t.string :industry 
      t.string :sector
      t.string :snapshot_link
      t.timestamps
    end
    add_index :companies, :companyname
    add_index :companies, :primarysymbol
  end
end
