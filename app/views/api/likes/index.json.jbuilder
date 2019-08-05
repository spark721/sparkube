
@likes.each do |cur_likes|
  json.set! cur_likes.id do
    json.extract! cur_likes, :id, :user_id, :video_id
  end
end