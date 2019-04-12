class AddIndexPrimarysymbolOnCompanies < ActiveRecord::Migration[5.2]
  def change
    add_index :companies, :primarysymbol
  end
end
