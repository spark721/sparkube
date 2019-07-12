
import React from 'react';

class LikeVideoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.video;
  }

  handleLike(e) {
    e.preventDefault();
    let currentUser = this.props.currentUser;
    let videoId = this.state.id;

    if (!currentUser) {
      return console.log("no user logged in")
    }

    // debugger
    if (this.state.curUserLikes) {
      unlikeVideo(this.state.likeId).then(
        (res) => (
          this.setState({
            likes: res.likes,
            curUserLikes: false
          })
        )
      )
    } else {
      likeVideo(videoId).then(
        (res) => (
          this.setState({
            likes: res.likes,
            curUserLikes: true
          })
        )
      );
    }
  }

  render() {
    return (
      <div>
        <div className="dislikes-count"
          onClick={this.handleLike.bind(this)} >
          <i className="fas fa-thumbs-up"></i>
          <span>{this.state.likes}</span>
        </div>
      </div>
    );
  };
};


export default LikeVideoComponent;