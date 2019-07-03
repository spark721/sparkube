
import { connect } from 'react-redux';
import { logIn } from '../../../actions/session_actions';
import LogInForm from './login_form';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'login',
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(logIn(user)),
  };
};

export default connect(msp, mdp)(LogInForm);
