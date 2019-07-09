class Api::VideosController < ApplicationController


  def create
    # debugger
    @video = Video.new(video_params)
    @video.author_id = current_user.id
    if @video.save
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def index
    @videos = Video.all
    render :index
  end

  def show
    @video = Video.find(params[:id])
  end

  def update
    @video = current_user.videos.find(params[:id])

    if @video.update_attributes(video_params)
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def destroy
    # debugger
    @video = Video.find(params[:id])

    if @video.author_id == current_user.id
      @video.destroy
      render :show
    else
      render json: ["Access Denied"], status: 401
    end
  end

  private

  def video_params
    params.require(:video).permit(:title, :description, :author_id, :video_url, :poster)
  end

end
