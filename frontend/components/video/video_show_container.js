
import { connect } from 'react-redux';
import { getVideo } from '../../actions/video_actions';
import VideoShow from './video_show';

const msp = (state, myProp) => {
  return {
    video: state.entities.videos[myProp.match.params.videoId],
  };
};

const mdp = (dispatch) => {
  return {
    getVideo: (id) => dispatch(getVideo(id)),
  };
};

export default connect(msp, mdp)(VideoShow);