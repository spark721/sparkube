class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username], 
      params[:user][:password]
    )
    
    if @user
      login!(@user)
      render :show
    else
      render json: ["Invalid credentials"], status: 401 
    end
  end

  def destroy
    if !current_user
      # render json: ["404 not found"], status: 404
      render json: ["No user is logged in"], status: 404
    else
      logout!
      render json: {}
    end
  end

  
end
