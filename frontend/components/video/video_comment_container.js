
import { connect } from 'react-redux';
import {
  postComment,
  deleteComment,
} from '../../actions/comment_action';
import CommentIndex from './video_comment_index';

const msp = (state) => {
  // debugger
  return {
    comments: Object.values(state.entities.comments),
  };
};

const mdp = (dispatch) => {
  return {
    postComment: (video_id, body) => dispatch(postComment(video_id, body)),
    deleteComment: (id) => dispatch(deleteComment(id)),
  }
}

export default connect(msp, mdp)(CommentIndex);