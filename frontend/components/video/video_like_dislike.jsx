
import React from 'react';
import { Link } from 'react-router-dom';

class LikeDislike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: this.props.videoId,
      likes: this.props.likes,
      dislikes: this.props.dislikes,
      curUserLikes: this.props.curUserLikes,
      curUserDislikes: this.props.curUserDislikes,
    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.videoId !== this.props.videoId) {
      this.setState({
        videoId: this.props.videoId,
        likes: this.props.likes,
        dislikes: this.props.dislikes,
        curUserLikes: this.props.curUserLikes,
        curUserDislikes: this.props.curUserDislikes,
      });
    };
  };

  handleLike(e) {
    // debugger
    e.preventDefault();
    let currentUser = this.props.currentUser;
    let curUserLikes = this.state.curUserLikes;
    let curUserDislikes = this.state.curUserDislikes;

    if (currentUser) {
      if (curUserLikes === false && curUserDislikes === false) {
        // like the video
        this.props.likeVideo(this.state.videoId).then(result => {
          this.setState({
            likes: this.state.likes + 1,
            curUserLikes: !curUserLikes,
          });
        });
      }
      else if (curUserLikes === false && curUserDislikes) {
        // undislike the video
        this.props.undislikeVideo(this.state.videoId);
        // like the video
        this.props.likeVideo(this.state.videoId).then(result => {
          this.setState({
            likes: this.state.likes + 1,
            dislikes: this.state.dislikes - 1,
            curUserLikes: !curUserLikes,
            curUserDislikes: !curUserDislikes,
          });
        });
      } else if (curUserLikes) {
        // unlike the video
        this.props.unlikeVideo(this.state.videoId).then(result => {
          this.setState({
            likes: this.state.likes - 1,
            curUserLikes: !curUserLikes,
          });
        });
      }
    }
  }

  handleDislike(e) {
    e.preventDefault();
    let currentUser = this.props.currentUser;
    let curUserLikes = this.state.curUserLikes;
    let curUserDislikes = this.state.curUserDislikes;

    if (currentUser) {
      if (curUserLikes === false && curUserDislikes === false) {
        // dislike the video
        this.props.dislikeVideo(this.state.videoId).then(result => {
          this.setState({
            dislikes: this.state.dislikes + 1,
            curUserDislikes: !curUserDislikes,
          });
        });
      } else if (curUserLikes && curUserDislikes === false) {
        // unlike the video
        this.props.unlikeVideo(this.state.videoId);
        // dislike the video
        this.props.dislikeVideo(this.state.videoId).then(result => {
          this.setState({
            likes: this.state.likes - 1,
            dislikes: this.state.dislikes + 1,
            curUserLikes: !curUserLikes,
            curUserDislikes: !curUserDislikes,
          });
        });
      } else if (curUserDislikes) {
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
    // video_like_dislike.jsx
    let currentUser = this.props.currentUser;
    let curUserLikes = this.state.curUserLikes;
    let curUserDislikes = this.state.curUserDislikes;

    const likeButton = currentUser ?
      curUserLikes ?
        <div className="likes-count-blue"
          onClick={this.handleLike.bind(this)} >
          <i className="fas fa-thumbs-up"></i>
          <span>{this.state.likes}</span>
        </div>
        :
        <div className="likes-count"
          onClick={this.handleLike.bind(this)} >
          <i className="fas fa-thumbs-up"></i>
          <span>{this.state.likes}</span>
        </div>
      :
      <div className="likes-count"
        onClick={this.handleLike.bind(this)} >
        <Link to={`/login`}>
          <i className="fas fa-thumbs-up"></i>
          <span>{this.state.likes}</span>
        </Link>
      </div>;

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
      <div className="likes-dislikes-buttons">
        {likeButton}
        {dislikeButton}
      </div>
    );
  }
}

export default LikeDislike;