

# debugger
json.extract! video, :id, :title, :description, :author_id

json.username video.user.username

json.likes video.likes.length
json.cur_user_likes video.liked_users.include?(current_user)

json.dislikes video.dislikes.length
json.cur_user_dislikes video.disliked_users.include?(current_user)

json.comments video.comments.length

if video.video_url.attached?
  json.videoUrl url_for(video.video_url)
end

if video.poster.attached?
  json.poster url_for(video.poster)
end


