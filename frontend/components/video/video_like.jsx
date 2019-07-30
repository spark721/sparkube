
import React from 'react';


class LikeVideoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes,
      curUserLikes: this.props.curUserLikes,
    };
    // debugger
  }

  componentDidMount() {
    this.props.getLikes(this.props.videoId).then( result => {
      this.setState({  });
    });
    // debugger;
  }

  // componentDidUpdate() {
    // debugger
    // this.props.getLikes(this.props.videoId);
  // }

  handleLike(e) {
    // debugger
    e.preventDefault();
    let currentUser = this.props.currentUser;
    let curUserLikes = this.state.curUserLikes;
    if (currentUser) {
      // debugger
      if (this.state.curUserLikes === false) {
        // like the video
        this.props.likeVideo(this.props.videoId).then( result => {
          this.setState({ likes: result, curUserLikes: !curUserLikes });
        });
      } else {
        // unlike the video
        this.props.unlikeVideo(this.props.videoId).then( result => {
          this.setState({ likes: result, curUserLikes: !curUserLikes });
        });
      }
    } else {
      // redirect user to login page
    }
  }

  render() {
    return (
      <div>
        <div className="likes-count"
          onClick={this.handleLike.bind(this)} >
          <i className="fas fa-thumbs-up"></i>
          <span>{Object.keys(this.props.likes).length}</span>
        </div>
      </div>
    );
  };
};


export default LikeVideoComponent;