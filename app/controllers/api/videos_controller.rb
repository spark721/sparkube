class Api::VideosController < ApplicationController


  def create
    # debugger
    if (params[:video][:video_url] == "null") || (params[:video][:poster] == "null")
      render json: ["Please upload both video and thumbnail"], status: 422
      return nil
    end

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
    @video = Video.includes(
      :user,
      :liked_users,
      :disliked_users,
      :comments => [:user]
    ).find(params[:id])
  end

  def update
    # debugger
    @video = current_user.videos.find(params[:id])

    if @video.update_attributes({
      title: params[:video][:title],
      description: params[:video][:description],
    })
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

  def search
    # debugger
    query_str = '%' + params[:query].downcase + '%'
    @videos = Video.where("lower(videos.title) LIKE ?", query_str)

    render :index
  end

  private

  def video_params
    params.require(:video).permit(:title, :description, :author_id, :video_url, :poster)
  end

end
