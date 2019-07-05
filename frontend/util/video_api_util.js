
// get all the videos
export const getVideos = () => {
  return $.ajax({
    type: `GET`,
    url: `/api/video`,
  });
};

// upload a video
export const createVideo = (video) => {
  return $.ajax({
    type: `POST`,
    url: `/api/video`,
    data: { video },
  });
};

// get one video
export const getVideo = (id) => {
  return $.ajax({
    type: `GET`,
    url: `/api/video/${id}`,
  });
};

// update a video
export const updateVideo = (video) => {
  return $.ajax({
    type: `PATCH`,
    url: `/api/video/${video.id}`,
    data: { video },
  });
};

// delete a video
export const deleteVideo = (id) => {
  return $.ajax({
    type: `DELETE`,
    url: `/api/video/${id}`,
  });
};