json.extract! @comment, :id, :author_id, :bill_id, :body, :created_at, :updated_at
        json.author @comment.author.name