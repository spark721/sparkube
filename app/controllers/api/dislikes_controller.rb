class Api::DislikesController < ApplicationController

  def create
    # debugger
    @dislike = Dislike.new({
      user_id: current_user.id
      video_id: params[:video_id]
    })

    if @dislike.save
      render 'api/videos/show'
    else
      render json: ["Please sign in first"], status: 401
    end
  end

  def destroy
    @dislike = current_user.dislikes.find(params[:id])

    if @dislike.destroy
      render 'api/video/show'
    else
      render json: ["Not found"], status: 422
    end
  end

end
