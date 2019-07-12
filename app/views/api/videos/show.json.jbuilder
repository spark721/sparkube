

if @video
  json.partial! 'video', video: @video
elsif @like
  # debugger
  json.partial! 'api/videos/video', video: @like.video
elsif @dislike
  json.partial! 'api/videos/video', video: @dislike.video
end
