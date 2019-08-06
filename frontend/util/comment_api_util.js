
// post a comment
export const postComment = (video_id, body) => {
  return $.ajax({
    type: `POST`,
    data: { body },
    url: `/api/videos/${video_id}/comments`,
  });
};

// delete a comment
export const deleteComment = (id) => {
  return $.ajax({
    type: `DELETE`,
    url: `/api/comments/${id}`,
  });
};