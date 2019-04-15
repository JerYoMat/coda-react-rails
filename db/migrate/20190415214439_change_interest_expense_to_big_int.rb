class ChangeInterestExpenseToBigInt < ActiveRecord::Migration[5.2]
  def change
    change_column :financial_periods, :interest_expense_net, :bigint
  end
end
