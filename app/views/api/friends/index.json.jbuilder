
    @friendships.each do |friendship|
        json.set! friendship.id do
            json.extract! friendship, :id, :user_id, :friend_id
            json.user friendship.user.name
            json.friend friendship.friend.name
        end 
end


