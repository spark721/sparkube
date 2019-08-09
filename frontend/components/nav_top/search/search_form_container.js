
import { connect } from 'react-redux';
import { searchVideos } from '../../../actions/search_actions';
import SearchForm from './search_form';

const msp = (state) => {
  return {

  };
};

const mdp = (dispatch) => {
  return {
    searchVideos: (query) => dispatch(searchVideos(query)),
  };
};

export default connect(msp, mdp)(SearchForm);