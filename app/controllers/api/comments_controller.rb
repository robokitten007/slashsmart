class Api::CommentsController < ApplicationController

def index

    @comments = Comment.all
    render :index

end 

def show
    @comment = Comment.find_by(id: params[:id])
    if @comment
        render :show
    else 
        render json:['comment not found'], status: 404
    end
end 

def create
    @comment = Comment.new(comment_params)
    if @comment.save
        render :show
    else 
        render json: @comment.errors.full_messages, status: 402 
    end 
end 


def destroy
    @comment = Comment.find_by(id: params[:id])
    if @comment
        @comment.destroy
        render json: @comment.id
    else 
        render json: ['comment can not be deleted'], status: 401
    end 
end 

protected

def comment_params
    params.require(:comment).permit(:author_id, :bill_id,:body)
end 





end



