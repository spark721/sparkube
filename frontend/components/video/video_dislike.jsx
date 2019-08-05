
import React from 'react';

class DislikeVideoComponent extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = {
      videoId: this.props.videoId,
      dislikes: this.props.dislikes,
      curUserLikes: this.props.curUserLikes,
      curUserDislikes: this.props.curUserDislikes,
    };
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    // debuggger
    if (prevProps.videoId !== this.props.videoId) {
      this.setState({
        videoId: this.props.videoId,
        dislikes: this.props.dislikes,
        curUserLikes: this.props.curUserLikes,
        curUserDislikes: this.props.curUserDislikes,
      });
    };
  }

  handleDislike(e) {
    // debugger
    e.preventDefault();
    let currentUser = this.props.currentUser;
    let curUserDislikes = this.state.curUserDislikes;
    if (currentUser) {
      // debugger
      if (curUserDislikes === false) {
        // dislike the video
        this.props.dislikeVideo(this.state.videoId).then(result => {
          this.setState({
            dislikes: this.state.dislikes + 1,
            curUserDislikes: !curUserDislikes,
          });
        });
      } else {
        // undislike the video
        this.props.undislikeVideo(this.state.videoId).then(result => {
          this.setState({
            dislikes: this.state.dislikes - 1,
            curUserDislikes: !curUserDislikes,
          });
        });
      }
    }
  }

  render() {
    // video_dislikes.jsx
    // debugger
    let currentUser = this.props.currentUser;
    let curUserDislikes = this.state.curUserDislikes;
    const dislikeButton = currentUser ?
      curUserDislikes ?
        <div className="dislikes-count-blue"
          onClick={this.handleDislike.bind(this)} >
          <i className="fas fa-thumbs-down"></i>
          <span>{this.state.dislikes}</span>
        </div>
        :
        <div className="dislikes-count"
          onClick={this.handleDislike.bind(this)} >
          <i className="fas fa-thumbs-down"></i>
          <span>{this.state.dislikes}</span>
        </div>
      :
      <div className="dislikes-count"
        onClick={this.handleDislike.bind(this)} >
        <Link to={`/login`}>
          <i className="fas fa-thumbs-down"></i>
          <span>{this.state.dislikes}</span>
        </Link>
      </div>;


    return (
      <div>{dislikeButton}</div>
    );
  };
};


export default DislikeVideoComponent;