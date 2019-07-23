
import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";
export const RECEIVE_ALL_DISLIKES = "RECEIVE_ALL_DISLIKES";
export const RECEIVE_DISLIKE = "RECEIVE_DISLIKE";
export const DELETE_DISLIKE = "DELETE_DISLIKE";


export const getLikes = (video_id) => {
  return (dispatch) => {
    return LikeAPIUtil.getLikes(video_id).then(
      (likes) => dispatch({ type: RECEIVE_ALL_LIKES, likes }),
    );
  };
};

export const likeVideo = (video_id) => {
  return (dispatch) => {
    return LikeAPIUtil.likeVideo(video_id).then(
      (like) => dispatch({ type: RECEIVE_LIKE, like }),
    );
  };
};

export const unlikeVideo = (video_id) => {
  return (dispatch) => {
    return LikeAPIUtil.unlikeVideo(video_id).then(
      (like) => dispatch({ type: DELETE_LIKE, like }),
    );
  };
};

export const getDislikes = (video_id) => {
  return (dispatch) => {
    return LikeAPIUtil.getDislikes(video_id).then(
      (dislikes) => dispatch({ type: RECEIVE_ALL_DISLIKES, dislikes }),
    )
  }
}

export const undislikeVideo = (video_id) => {
  return (dispatch) => {
    return LikeAPIUtil.undislikeVideo(video_id).then(
      (dislike) => dispatch({ type: RECEIVE_DISLIKE, dislike }),
    );
  };
};

export const dislikeVideo = (video_id) => {
  return (dispatch) => {
    return LikeAPIUtil.dislikeVideo(video_id).then(
      (dislike) => dispatch({ type: DELETE_DISLIKE, dislike }),
    );
  };
};

