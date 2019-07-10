


json.extract! video, :id, :title, :description, :author_id

json.username video.user.username

if video.video_url.attached?
  json.videoUrl url_for(video.video_url)
end

if video.poster.attached?
  json.poster url_for(video.poster)
end
