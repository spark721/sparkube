
import React from 'react';
import CommentIndexItem from './video_comment_index_item';
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {

  constructor(props) {
    // debugger
    super(props);
    this.state = {
      comments: this.props.comments,
      // newCommentBody: '',
    };
  };

  // update(e) {
  //   this.setState({ newCommentBody: e.target.value });
  // }

  // handleCancel(e) {
  //   e.preventDefault();
  //   this.setState({ newCommentBody: '' });
  // }

  // handleComment(e) {
  //   // debugger
  //   e.preventDefault();
  //   this.props.postComment(this.props.videoId, this.state.newCommentBody);
  // }

  render() {
    // video_comment_index.jsx
    // debugger
    // let currentUser = this.props.currentUser;

    // const commentButton = this.state.newCommentBody.length > 0 ?
    //   <button
    //     className='comment-comment-btn-blue'
    //     onClick={this.handleComment.bind(this)}
    //   >
    //     COMMENT
    //   </button>
    //   : <button className='comment-comment-btn'>COMMENT</button>;


    // const commentInput = currentUser ?
    //   <input
    //     type="text"
    //     value={this.state.newCommentBody}
    //     onChange={this.update.bind(this)}
    //     className="comment-input-text"
    //     placeholder="Add a public comment..."
    //   />
    //   : 
    //   <Link to={`/login`}>
    //     <input
    //       type="text"
    //       value={this.state.newCommentBody}
    //       onChange={this.update.bind(this)}
    //       className="comment-input-text"
    //       placeholder="Add a public comment..."
    //     />
    //   </Link>

    let comments = this.props.comments.map( (comment, i) => {
      return <CommentIndexItem
              key={i}
              comment={comment}
              />;
    })

    return (
      <div>
        {/* <div className='comment-form'>
          <div className='comments-count'>
            <p>{this.state.comments.length} Comments</p>
          </div>
          <div className='comment-input'>
            {commentInput}
          </div>
          <div className='comment-form-buttons'>
            <div className='comment-buttons-div'>
              <button
                className='comment-cancel-btn'
                onClick={this.handleCancel.bind(this)}
              >
                CANCEL
              </button>
              {commentButton}
            </div>
          </div>
        </div> */}
        <div>
          <ul>{comments}</ul>
        </div>
      </div>
    );
  };
};

export default CommentIndex;