
import React from 'react';
import { Link } from 'react-router-dom';


class LikeVideoComponent extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = {
      videoId: this.props.videoId,
      likes: this.props.likes,
      curUserLikes: this.props.curUserLikes,
      curUserDislikes: this.props.curUserDislikes,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // debugger
    if (prevProps.videoId !== this.props.videoId) {
      this.setState({
        videoId: this.props.videoId,
        likes: this.props.likes,
        curUserLikes: this.props.curUserLikes,
        curUserDislikes: this.props.curUserDislikes,
      });
    };
  }


  handleLike(e) {
    // debugger
    e.preventDefault();
    let currentUser = this.props.currentUser;
    let curUserLikes = this.state.curUserLikes;
    if (currentUser) {
      // debugger
      if (curUserLikes === false) {
        // like the video
        this.props.likeVideo(this.state.videoId).then( result => {
          this.setState({
            likes: this.state.likes + 1,
            curUserLikes: !curUserLikes,
          });
        });
      } else {
        // unlike the video
        this.props.unlikeVideo(this.state.videoId).then( result => {
          this.setState({
            likes: this.state.likes - 1,
            curUserLikes: !curUserLikes,
          });
        });
      }
    }
  }

  render() {
    // video_likes.jsx
    // debugger
    let currentUser = this.props.currentUser;
    let curUserLikes = this.state.curUserLikes;
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


    return (
      <div>{likeButton}</div>
    );
  };
};


export default LikeVideoComponent;