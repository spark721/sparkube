
import { connect } from 'react-redux';
import {
  getVideo,
  deleteVideo,
  } from '../../actions/video_actions';

import {
  getLikes,
  likeVideo,
  unlikeVideo,
  getDislikes,
  undislikeVideo,
  dislikeVideo,
  } from '../../actions/like_actions';

import VideoShow from './video_show';

const msp = (state, myProp) => {
  let currentUserId = state.session.id;
  return {
    video: state.entities.videos[myProp.match.params.videoId],
    // likes: state.entities.likes,
    // dislikes: state.entities.dislikes,
    currentUser: state.entities.users[currentUserId],
    errors: state.errors.videoErrors,
  };
};

const mdp = (dispatch) => {
  return {
    getVideo: (id) => dispatch(getVideo(id)),
    deleteVideo: (id) => dispatch(deleteVideo(id)),
    dislikeVideo: (video_id) => dispatch(dislikeVideo(video_id)),
    undislikeVideo: (video_id) => dispatch(undislikeVideo(video_id)),
    likeVideo: (video_id) => dispatch(likeVideo(video_id)),
    unlikeVideo: (video_id) => dispatch(unlikeVideo(video_id)),
  };
};

export default connect(msp, mdp)(VideoShow);