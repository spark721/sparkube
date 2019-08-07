
# json.extract! @comment, :id, :body, :author_id, :video_id


json.partial! 'api/videos/video', comment: @comment
