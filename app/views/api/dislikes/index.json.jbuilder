
@dislikes.each do |cur_dislikes|
  json.set! cur_dislikes.id do
    json.extract! cur_dislikes, :id, :user_id, :video_id
  end
end