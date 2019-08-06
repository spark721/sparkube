
import React from 'react';

class CommentIndex extends React.Component {

  constructor(props) {
    // debugger
    super(props);
    this.state = {
      comments: this.props.comments,
      newCommentBody: '',
    };
  };

  update(e) {
    this.setState({ newCommentBody: e.target.value });
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({ newCommentBody: '' });
  }

  render() {
    // debugger
    const commentButton = this.state.newCommentBody.length > 0 ?
      <button className='comment-comment-btn-blue'>COMMENT</button>
      : <button className='comment-comment-btn'>COMMENT</button>;

    return (
      <div className='comment-form'>
        <div className='comments-count'>
          <p>{this.state.comments.length} Comments</p>
        </div>
        <div className='comment-input'>
          {/* <form> */}
            <input
              type="text"
              value={this.state.newCommentBody}
              onChange={this.update.bind(this)}
              className="comment-input-text"
              placeholder="Add a public comment..."
            />
          {/* </form> */}
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
      </div>
    );
  };
};

export default CommentIndex;