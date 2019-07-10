
import { connect } from 'react-redux';
import { getVideo, updateVideo, clearErrors } from '../../actions/video_actions';
import VideoEditForm from './video_edit_form';

const msp = (state, myProp) => {
  let currentUserId = state.session.id;
  return {
    currentUser: state.entities.users[currentUserId],
    video: state.entities.videos[myProp.match.params.videoId],
    errors: state.errors.videoErrors,
  };
};

const mdp = (dispatch) => {
  return {
    getVideo: (id) => dispatch(getVideo(id)),
    updateVideo: (video) => dispatch(updateVideo(video)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(msp, mdp)(VideoEditForm);