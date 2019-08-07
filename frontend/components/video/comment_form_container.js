
import { connect } from 'react-redux';
import { postComment } from '../../actions/comment_action';
import CommentForm from './comment_form';

const msp = (state) => {
  return {
    comments: Object.values(state.entities.comments),
  };
};

const mdp = (dispatch) => {
  return {
    postComment: (video_id, body) => dispatch(postComment(video_id, body)),
  };
};

export default connect(msp, mdp)(CommentForm);