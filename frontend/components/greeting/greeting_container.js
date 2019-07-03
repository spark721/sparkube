
import { connect } from 'react-redux';
import Greeting from './greeting';
import { logOut } from '../../actions/session_actions';

const msp = (state) => {
  let currentUserId = state.session.id
  return {
    currentUser: state.entities.users[currentUserId]
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logOut()),
  };
};

export default connect(msp, mdp)(Greeting);