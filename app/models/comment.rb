class Comment < ApplicationRecord
    validates :author_id, :bill_id, presence: true

    belongs_to :bill,
        foreign_key: :bill_id,
        class_name: :Bill

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
end
