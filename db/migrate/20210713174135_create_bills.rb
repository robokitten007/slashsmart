class CreateBills < ActiveRecord::Migration[5.2]
  def change
    create_table :bills do |t|
      t.integer :user_id, null:false
      t.integer :friend_id, null:false
      t.integer :amount, null: false
      t.integer :amount_paid, null: false
      t.string :description, null: false
      t.string :category
      t.text :notes
      t.timestamps
    end
    add_index :bills, :user_id
    add_index :bills, :friend_id
  end
end
