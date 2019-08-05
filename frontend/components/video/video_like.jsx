
import React from 'react';
import { Link } from 'react-router-dom';


class LikeVideoComponent extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = {
      likes: this.props.likes,
      curUserLikes: this.props.curUserLikes,
      curUserDislikes: this.props.curUserDislikes,
    };
  }

  componentDidMount() {
    // debugger
    this.props.getLikes(this.props.videoId).then( result => {
      this.setState({
        likes: result,
      });
    });
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
        this.props.likeVideo(this.props.videoId).then( result => {
          this.setState({
            likes: result,
            curUserLikes: !curUserLikes,
          });
        });
      } else {
        // unlike the video
        this.props.unlikeVideo(this.props.videoId).then( result => {
          this.setState({
            likes: result,
            curUserLikes: !curUserLikes,
          });
        });
      }
    } else {
      // redirect user to login page
    }
  }

  render() {
    // debugger
    let currentUser = this.props.currentUser;
    let curUserLikes = this.state.curUserLikes;
    const likeButton = currentUser ?
      curUserLikes ? 
        <div className="likes-count-blue"
          onClick={this.handleLike.bind(this)} >
          <i className="fas fa-thumbs-up"></i>
          <span>{Object.keys(this.props.likes).length}</span>
        </div>
        :
        <div className="likes-count"
          onClick={this.handleLike.bind(this)} >
          <i className="fas fa-thumbs-up"></i>
          <span>{Object.keys(this.props.likes).length}</span>
        </div>
      : 
        <div className="likes-count"
          onClick={this.handleLike.bind(this)} >
          <Link to={`/login`}>
            <i className="fas fa-thumbs-up"></i>
            <span>{Object.keys(this.props.likes).length}</span>
          </Link>
        </div>;


    return (
      <div>{likeButton}</div>
    );
  };
};


export default LikeVideoComponent;