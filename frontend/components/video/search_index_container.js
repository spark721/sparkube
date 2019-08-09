
import { connect } from 'react-redux';
import { searchVideos } from '../../actions/search_actions';
import SearchIndex from './search_index';

const msp = (state) => {
  return {
    videos: Object.values(state.entities.videos),
  };
};

const mdp = (dispatch) => {
  return {
    searchVideos: (query) => dispatch(searchVideos(query)),
  };
};

export default connect(msp, mdp)(SearchIndex);