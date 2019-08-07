
@videos.each do |cur_video|

  # all videos slice
  json.videos do
    json.set! cur_video.id do
      json.extract! cur_video, :id, :title, :description, :author_id

      json.username cur_video.user.username
      json.likes cur_video.likes.length
      json.cur_user_likes cur_video.liked_users.include?(current_user)

      json.dislikes cur_video.dislikes.length
      json.cur_user_dislikes cur_video.disliked_users.include?(current_user)

      json.comments cur_video.comments.length

      if cur_video.video_url.attached?
        json.videoUrl url_for(cur_video.video_url)
      end

      if cur_video.poster.attached?
        json.poster url_for(cur_video.poster)
      end

    end
  end

  # all comments slice
  cur_video.comments.each do |comment|
    json.comments do
      json.set! comment.id do
        json.extract! comment, :id, :body, :author_id, :video_id
      end
    end
  end

  # # all likes slice
  # cur_video.likes.each do |like|
  #   json.likes do
  #     json.set! like.id do
  #       json.extract! like, :id, :user_id, :video_id
  #     end
  #   end
  # end

  # # all dislikes slice
  # cur_video.dislikes.each do |dislike|
  #   json.dislikes do
  #     json.set! dislike.id do
  #       json.extract! dislike, :id, :user_id, :video_id
  #     end
  #   end
  # end

end

