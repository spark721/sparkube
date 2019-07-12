class Api::LikesController < ApplicationController

  def create
    if !current_user
      render json: ["please sign in first"], status: 401
      return nil
    end

    # debugger
    @like = Like.new()
    @like.user_id = current_user.id
    @like.video_id = params[:video_id]

    if @like.save
      render 'api/videos/show'
    else
      render json: ["Please sign in first"], status: 401
    end
  end

  def destroy
    # debugger
    @like = current_user.likes.find(params[:id])

    if @like.destroy
      render '/api/videos/show'
    else
      render json: ["Not found"], status: 422
    end
  end

end
