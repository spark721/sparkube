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
      # @video = @dislike.video
      # render 'api/videos/show'
      render :show
    else
      render json: @dislike.errors.full_messages, status: 401
    end
  end

  def index
    video = Video.find(params[:video_id])
    @dislikes = video.dislikes
  end

  def destroy
    @dislike = Dislike.find_by(
      user_id: current_user.id,
      video_id: params[:video_id]
    )

    if @dislike.destroy
      # @video = @dislike.video
      # render 'api/videos/show'
      render :show
    else
      render json: ["Not found"], status: 422
    end
  end

end
