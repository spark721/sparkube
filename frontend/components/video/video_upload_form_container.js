
import { connect } from 'react-redux';
import VideoUploadForm from './video_upload_form';
import { createVideo } from '../../actions/video_actions';

const msp = (state) => {
  let currentUserId = state.session.id;
  return {
    currentUser: state.entities.users[currentUserId],
    videoErrors: state.errors.videoErrors,
  };
};

const mdp = (dispatch) => {
  return {
    createVideo: (video) => dispatch(createVideo(video)),
  };
};

export default connect(msp, mdp)(VideoUploadForm);

