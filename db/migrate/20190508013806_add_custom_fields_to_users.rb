class AddCustomFieldsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :custom_fields, :text
  end
end
