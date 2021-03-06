class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
    t.integer :author_id, null: false
    t.integer :bill_id, null: false
    t.string :body
      t.timestamps
    end
    add_index :comments, :author_id
    add_index :comments, :bill_id
  end
end
