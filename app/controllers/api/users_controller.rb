class Api::UsersController < ApplicationController
  # def index
  #   @users = User.all
  #   render json: @users
  # end
  
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    # debugger
    params.require(:user).permit(:username, :password, :email)
  end
end
