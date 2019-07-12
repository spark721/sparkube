

# debugger
json.extract! video, :id, :title, :description, :author_id

json.username video.user.username

json.likes video.likes.length
if current_user
  json.curUserLikes video.liked_users.include?(current_user)
  if video.liked_users.include?(current_user)
    json.likeId current_user.likes.find_by(video_id: video.id).id
  end
end

json.dislikes video.dislikes.length
if current_user
  json.curUserDislikes video.disliked_users.include?(current_user)
  if video.disliked_users.include?(current_user)
    json.dislikeId current_user.dislikes.find_by(video_id: video.id).id
  end
end

if video.video_url.attached?
  json.videoUrl url_for(video.video_url)
end

if video.poster.attached?
  json.poster url_for(video.poster)
end
