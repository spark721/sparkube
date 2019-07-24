class Api::LikesController < ApplicationController

  def create
    # if !current_user
    #   render json: ["please sign in first"], status: 401
    #   return nil
    # end

    # debugger
    @like = Like.new()
    @like.user_id = current_user.id
    @like.video_id = params[:video_id]

    if @like.save
      # @video = @like.video
      # render 'api/videos/show'
      render :show
    else
      render json: @like.errors.full_messages, status: 401
    end
  end

  def index
    # debugger
    video = Video.find(params[:video_id])
    @likes = video.likes
  end

  def destroy
    @like = Like.find_by(
      user_id: current_user.id,
      video_id: params[:video_id]
    )

    if @like.destroy
      # @video = @like.video
      # render '/api/videos/show'
      render :show
    else
      render json: ["Not found"], status: 422
    end
  end

end
