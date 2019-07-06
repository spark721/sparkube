
// get all the videos
export const getVideos = () => {
  return $.ajax({
    type: `GET`,
    url: `/api/videos`,
  });
};

// upload a video
export const createVideo = (video) => {
  return $.ajax({
    type: `POST`,
    url: `/api/videos`,
    data: { video },
  });
};

// get one video
export const getVideo = (id) => {
  return $.ajax({
    type: `GET`,
    url: `/api/videos/${id}`,
  });
};

// update a video
export const updateVideo = (video) => {
  return $.ajax({
    type: `PATCH`,
    url: `/api/videos/${video.id}`,
    data: { video },
  });
};

// delete a video
export const deleteVideo = (id) => {
  return $.ajax({
    type: `DELETE`,
    url: `/api/videos/${id}`,
  });
};