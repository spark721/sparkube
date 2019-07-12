
// like a video
export const likeVideo = (video_id) => {
  return $.ajax({
    type: `POST`,
    url: `/api/videos/${video_id}/likes`,
  });
};

// unlike a video
export const unlikeVideo = (id) => {
  return $.ajax({
    type: `DELETE`,
    url: `/api/likes/${id}`,
  });
};

// dislike a video
export const dislikeVideo = (video_id) => {
  return $.ajax({
    type: `POST`,
    url: `/api/videos/${video_id}/dislikes`,
  });
};

export const undislikeVideo = (id) => {
  return $.ajax({
    type: `DELETE`,
    url: `/api/dislikes/${id}`,
  });
};
