class AddInterestExpenseToFinancialPeriod < ActiveRecord::Migration[5.2]
  def change
    add_column :financial_periods, :interest_expense_net, :integer
  end
end
