
import { connect } from 'react-redux';
import {
  collapseSidebar,
  expandSidebar,
} from '../../actions/ui_action';
import SideBar from './side_bar';

const msp = (state) => {
  let currentUserId = state.session.id;
  return {
    expand: state.ui.expand,
    currentUser: state.entities.users[currentUserId],
  };
};

const mdp = (dispatch) => {
  return {
    collapseSidebar: () => dispatch(collapseSidebar()),
    expandSidebar: () => dispatch(expandSidebar()),
  };
};

export default connect(msp, mdp)(SideBar);