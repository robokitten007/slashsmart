class AddPaidByToBills < ActiveRecord::Migration[5.2]
  def change
    add_column :bills, :paid_by_user, :boolean
  end
end
