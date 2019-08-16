
import { connect } from 'react-redux';
import {
  collapseSidebar,
  expandSidebar
} from '../../actions/ui_action';
import NavTop from './nav_top';

const msp = (state) => {
  return {
    expand: state.ui.expand,
  }
};

const mdp = (dispatch) => {
  return {
    collapseSidebar: () => dispatch(collapseSidebar()),
    expandSidebar: () => dispatch(expandSidebar()),
  };
};

export default connect(msp, mdp)(NavTop);