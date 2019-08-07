
import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { getVideos } from '../../actions/video_actions';

const msp = (state) => {
  return {
    videos: Object.values(state.entities.videos),
  };
};

const mdp = (dispatch) => {
  return {
    getVideos: () => dispatch(getVideos()),

  };
};

export default connect(msp, mdp)(VideoIndex);