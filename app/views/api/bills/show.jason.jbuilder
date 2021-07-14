json.extract! @bill, :id, :user_id, :friend_id, :amount, :amount_paid, :description, :category, :notes, :paid_by_user, :created_at, :updated_at
            json.author @bill.author.name
            json.partner @bill.partner.name