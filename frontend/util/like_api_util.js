
// like a video
export const likeVideo = (video_id) => {
  return $.ajax({
    type: `POST`,
    url: `/api/videos/${video_id}/likes`,
  });
};

// unlike a video
export const unlikeVideo = (video_id) => {
  return $.ajax({
    type: `DELETE`,
    url: `/api/videos/${video_id}/likes`,
  });
};

// fetch all likes
export const getLikes = (video_id) => {
  return $.ajax({
    type: `GET`,
    url: `/api/videos/${video_id}/likes`,
  })
}

// dislike a video
export const dislikeVideo = (video_id) => {
  return $.ajax({
    type: `POST`,
    url: `/api/videos/${video_id}/dislikes`,
  });
};

// undislike a video
export const undislikeVideo = (video_id) => {
  return $.ajax({
    type: `DELETE`,
    url: `/api/videos/${video_id}/dislikes`,
  });
};

// fetch all dislikes
export const getDislikes = (video_id) => {
  return $.ajax({
    type: `GET`,
    url: `/api/videos/${video_id}/dislikes`,    
  })
}