class Api::BillsController < ApplicationController

    # list all bills under a friend
    def index
    
        @user = current_user
        #all bills related to the current user
        @bills = @user.bills_created + @user.bills_received
      
        render :index

    end 


#     # def create
#     #     user_id = current_user.id
#     #     friend_id = params[:bill][:friend_id]
#     # end 

    
    def update
        @bill = Bill.find_by(id: params[:id])
        if @bill.update(bill_params)
            render :show
        else 
            render json: bill.errors.full_messages, status: 401
        end 
        
    end
        
    def show
        @bill = Bill.find_by(id: params[:id])
        render :show
    end


    def destroy
        bill = Bill.find_by(id: params[:id])
        if bill.destroy
            render json: bill.id
        else
            render json: @bill.error.full_messages, status: 401
        end 
        
    end

    protected

    def bill_params
    params.require(:bill).permit(:user_id, :friend_id, :description, :amount, :amount_paid, :category, :notes)
    
    end 

end
