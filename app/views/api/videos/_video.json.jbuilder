


json.extract! video, :id, :title, :description, :author_id

if video.video_url.attached?
  json.videoUrl url_for(video.video_url)
end
