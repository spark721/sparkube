

@videos.each do |cur_video|
  json.set! cur_video.id do
    json.extract! cur_video, :id, :title, :description, :author_id

    json.username cur_video.user.username
    json.likes cur_video.likes.length
    json.dislikes cur_video.dislikes.length

    if cur_video.video_url.attached?
      json.videoUrl url_for(cur_video.video_url)
    end

    if cur_video.poster.attached?
      json.poster url_for(cur_video.poster)
    end

  end
end
