
json.extract! @comment, :id, :body, :author_id, :video_id
json.username @comment.user.username


# json.partial! 'api/videos/video', comment: @comment
