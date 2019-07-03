
import { connect } from 'react-redux';
import { logIn } from '../../../actions/session_actions';
import LogInForm from './login_form';

const msp = (state, myProp) => {
  return {
    errors: state.errors.session,
    formType: 'login',
  };
};

const mdp = (dispatch, myProp) => {
  return {
    processForm: (user) => dispatch(logIn(user)),
  };
};

export default connect(msp, mdp)(LogInForm);
