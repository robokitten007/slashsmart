class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show.json.jbuilder"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  protected

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
