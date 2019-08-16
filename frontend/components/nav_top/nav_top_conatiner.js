
import { connect } from 'react-redux';
import {
  collapseSidebar,
  expandSidebar,
  openModal,
  closeModal,
} from '../../actions/ui_action';
import NavTop from './nav_top';

const msp = (state) => {
  return {
    expand: state.ui.expand,
    modal: state.ui.modal,
  }
};

const mdp = (dispatch) => {
  return {
    collapseSidebar: () => dispatch(collapseSidebar()),
    expandSidebar: () => dispatch(expandSidebar()),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(NavTop);