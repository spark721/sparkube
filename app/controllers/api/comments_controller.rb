class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(
      params[:comment][:body]
    )
    @comment.author_id = current_user.id
    @comment.video_id = params[:video_id]

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])

    if @comment.author_id == current_user.id
      @comment.destroy
      render :show
    else
      render json: ["Access Denied"], status: 401
    end
  end

end
