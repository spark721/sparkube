class Api::DislikesController < ApplicationController

  def create
    if !current_user
      render json: ["please sign in first"], status: 401
      return nil
    end

    # debugger
    @dislike = Dislike.new()
    @dislike.user_id = current_user.id
    @dislike.video_id = params[:video_id]

    if @dislike.save
      render 'api/videos/show'
    else
      render json: ["Please sign in first"], status: 401
    end
  end

  def destroy
    @dislike = current_user.dislikes.find(params[:id])

    if @dislike.destroy
      render 'api/videos/show'
    else
      render json: ["Not found"], status: 422
    end
  end

end
