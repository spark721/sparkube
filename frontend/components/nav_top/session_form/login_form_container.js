
import { connect } from 'react-redux';
import { logIn, clearErrors } from '../../../actions/session_actions';
import LogInForm from './login_form';

const msp = (state) => {
  return {
    errors: state.errors.sessionErrors,
    formType: 'login',
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(logIn(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(msp, mdp)(LogInForm);
