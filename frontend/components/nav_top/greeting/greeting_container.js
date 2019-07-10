
import { connect } from 'react-redux';
import Greeting from './greeting';
import { logOut } from '../../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  let currentUserId = state.session.id
  return {
    currentUser: state.entities.users[currentUserId]
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logOut())
  };
};

export default withRouter(connect(msp, mdp)(Greeting));