
import * as VideoAPIUtil from '../util/video_api_util';
import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const DELETE_VIDEO = 'DELETE_VIDEO';
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


const receiveErrors = (errors) => {
  return {
    type: RECEIVE_VIDEO_ERRORS,
    errors: errors,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const getVideos = () => {
  return (dispatch) => {
    return VideoAPIUtil.getVideos().then(
      (videos) => dispatch({ type: RECEIVE_ALL_VIDEOS, videos}),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const createVideo = (formData) => {
  return (dispatch) => {
    return VideoAPIUtil.createVideo(formData).then( 
      (video) => dispatch({ type: RECEIVE_VIDEO, video }),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const getVideo = (id) => {
  return (dispatch) => {
    return VideoAPIUtil.getVideo(id).then( 
      (video) => dispatch({ type: RECEIVE_VIDEO, video }),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const updateVideo = (video) => {
  return (dispatch) => {
    return VideoAPIUtil.updateVideo(video).then( 
      (video) => dispatch({ type: RECEIVE_VIDEO, video }),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const deleteVideo = (id) => {
  return (dispatch) => {
    return VideoAPIUtil.deleteVideo(id).then( 
      (video) => dispatch({ type: DELETE_VIDEO, videoId: video.id }),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const likeVideo = (id) => {
  return (dispatch) => {
    return LikeAPIUtil.likeVideo(id).then(
      (video) => dispatch({ type: RECEIVE_VIDEO, video }),
    );
  };
};

export const unlikeVideo = (id) => {
  return (dispatch) => {
    return LikeAPIUtil.unlikeVideo(id).then(
      (video) => dispatch({ type: RECEIVE_VIDEO, video }),
    );
  };
};

export const undislikeVideo = (id) => {
  return (dispatch) => {
    return LikeAPIUtil.undislikeVideo(id).then(
      (video) => dispatch({ type: RECEIVE_VIDEO, video }),
    );
  };
};

export const dislikeVideo = (id) => {
  return (dispatch) => {
    return LikeAPIUtil.dislikeVideo(id).then(
      (video) => dispatch({ type: RECEIVE_VIDEO, video }),
    );
  };
};