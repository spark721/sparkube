
json.array! @videos do |video|
  json.extract! video, :id, :title, :description, :author_id
  json.videoUrl url_for(video.video_url)
end
