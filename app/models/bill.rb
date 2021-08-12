class Bill < ApplicationRecord

validates :user_id, :friend_id, :description, :amount, :amount_paid, presence: true
validates :amount, numericality: { :greater_than => 0 }
validates :paid_by_user, inclusion: {in: [true, false]}
belongs_to :author,
    foreign_key: :user_id,
    class_name: :User

belongs_to :partner,
    foreign_key: :friend_id,
    class_name: :User
end
