
import { connect } from 'react-redux';
import { 
  getVideo, 
  deleteVideo,
  likeVideo,
  unlikeVideo,
  undislikeVideo,
  dislikeVideo,
  } from '../../actions/video_actions';
import VideoShow from './video_show';

const msp = (state, myProp) => {
  let currentUserId = state.session.id;
  // debugger
  return {
    video: state.entities.videos[myProp.match.params.videoId],
    videos: state.entities.videos,
    currentUser: state.entities.users[currentUserId],
    errors: state.errors.videoErrors,
  };
};

const mdp = (dispatch) => {
  return {
    getVideo: (id) => dispatch(getVideo(id)),
    deleteVideo: (id) => dispatch(deleteVideo(id)),
    dislikeVideo: (id) => dispatch(dislikeVideo(id)),
    undislikeVideo: (id) => dispatch(undislikeVideo(id)),
    likeVideo: (id) => dispatch(likeVideo(id)),
    unlikeVideo: (id) => dispatch(unlikeVideo(id)),
  };
};

export default connect(msp, mdp)(VideoShow);