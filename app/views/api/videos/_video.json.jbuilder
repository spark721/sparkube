


json.extract! video, :id, :title, :description, :author_id
json.videoUrl url_for(video.video_url)



# json.array! videos do |cur_video|
#   json.extract! cur_video, :id, :title, :description, :author_id
#   json.videoUrl url_for(cur_video.video_url)
# end
