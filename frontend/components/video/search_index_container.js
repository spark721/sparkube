
import { connect } from 'react-redux';
import { searchVideos } from '../../actions/search_actions';
import SearchIndex from './search_index';

const msp = (state, myProp) => {
  // debugger
  return {
    searchQuery: myProp.location.search
  };
};

const mdp = (dispatch) => {
  return {
    searchVideos: (query) => dispatch(searchVideos(query)),
  };
};

export default connect(msp, mdp)(SearchIndex);