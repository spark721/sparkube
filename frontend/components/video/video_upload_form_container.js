
import { connect } from 'react-redux';
import VideoUploadForm from './video_upload_form';
import { createVideo } from '../../actions/video_actions';

const msp = (state) => {
  let currentUserId = state.session.id;
  return {
    currentUser: state.entities.users[currentUserId],
    errors: state.errors.videoErrors,
  };
};

const mdp = (dispatch) => {
  return {
    createVideo: (formData) => dispatch(createVideo(formData)),
  };
};

export default connect(msp, mdp)(VideoUploadForm);

