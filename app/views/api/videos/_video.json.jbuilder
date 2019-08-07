
json.video do
  # debugger
  json.extract! video, :id, :title, :description, :author_id

  json.username video.user.username

  json.likes video.likes.length
  json.cur_user_likes video.liked_users.include?(current_user)

  json.dislikes video.dislikes.length
  json.cur_user_dislikes video.disliked_users.include?(current_user)

  json.commentsCount video.comments.length

  if video.video_url.attached?
    json.videoUrl url_for(video.video_url)
  end

  if video.poster.attached?
    json.poster url_for(video.poster)
  end

end

video.comments.each do |comment|
  json.comments do
    json.set! comment.id do
      json.extract! comment, :id, :body, :author_id, :video_id
    end
  end
end

# video.likes.each do |like|
#   json.likes do
#     json.set! like.id do
#       json.extract! like, :id, :user_id, :video_id
#     end
#   end
# end

# video.dislikes.each do |dislike|
#   json.dislikes do
#     json.set! dislike.id do
#       json.extract! dislike, :id, :user_id, :video_id
#     end
#   end
# end