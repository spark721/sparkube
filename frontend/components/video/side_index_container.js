
import { connect } from 'react-redux';
import { getVideos } from '../../actions/video_actions';
import SideIndex from './side_index';

const msp = (state, myProp) => {
  // debugger
  return {
    videos: Object.values(state.entities.videos),
    // videoId: myProp.videoId,
  };
};

const mdp = (dispatch) => {
  return {
    getVideos: () => dispatch(getVideos()),
  };
};

export default connect(msp, mdp)(SideIndex);