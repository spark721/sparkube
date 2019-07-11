class Api::LikesController < ApplicationController

  def create
    # debugger
    @like = Like.new({
      user_id: current_user.id
      video_id: params[:video_id]
    })

    if @like.save
      render 'api/videos/show'
    else
      render json: ["Please sign in first"], status: 401
    end
  end

  def destroy
    @like = current_user.likes.find(params[:id])

    if @like.destroy
      render 'api/video/show'
    else
      render json: ["Not found"], status: 422
    end
  end

end
