class Api::FriendsController < ApplicationController

    def index
        @user_id = current_user.id
        #array of friendship instances from Friend
        @friendships = Friend.all.where(user_id: @user_id)
        @friends = [];
        @friendships.each do |friendship|
            @friends.push(friendship.friend_id)
        end
        # an array of user instances that are friends of current users 
        @friends = User.find(@friends) 
        render 'api/friends/index.json.jbuilder'
    end


    def create
        @user_id = current_user.id;
        @friend = User.find_by(email: params[:email])

        if @friend.nil?
            render json:["Opps, looks like your friend has not joined yet"], status: 401
        else
           @friend_id = @friend.id
           @friendship = Friend.new(user_id: @user_id, friend_id: @friend_id)
             if @friendship.save
                render 'api/friends/index.json.jbuilder'
             else
                render json: ["friendship can't be saved"]
             end 
        end 
        
    end 


    def destroy
        friendship = Friend.find_by(id: params[:id])

        if friendship.destroy
            render 'api/friends/index.json.jbuilder'
        else
            render json: ['Friend cannot be deleted'], status: 401
        end   
    end
end
