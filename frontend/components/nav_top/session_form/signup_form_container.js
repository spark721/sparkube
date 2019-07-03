
import { connect } from 'react-redux';
import { signUp } from '../../../actions/session_actions';
import SignUpForm from './signup_form';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'signup',
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(signUp(user)),
  };
};

export default connect(msp, mdp)(SignUpForm);
