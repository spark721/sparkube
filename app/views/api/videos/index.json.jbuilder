



json.array! @videos do |cur_video|
  json.extract! cur_video, :id, :title, :description, :author_id
  if cur_video.video_url.attached?
    json.videoUrl url_for(cur_video.video_url)
  end
end
