
import React from 'react';

class DislikeVideoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.video;
  }

  handleDislike(e) {
    e.preventDefault();
    let currentUser = this.props.currentUser;
    let videoId = this.state.id;

    if (!currentUser) {
      return console.log("no user logged in")
    }
    
    // debugger
    if (this.state.curUserDislikes) {
      undislikeVideo(this.state.dislikeId).then(
        (res) => (
          this.setState({
            dislikes: res.dislikes, 
            curUserDislikes: false
          })
        )
      )
    } else {
      dislikeVideo(videoId).then(
        (res) => (         
          this.setState({
            dislikes: res.dislikes,
            curUserDislikes: true
          })
        )
      );
    }
  }

  render() {
    return (
      <div>
        <div className="dislikes-count"
             onClick={this.handleDislike.bind(this)} >
          <i className="fas fa-thumbs-down"></i>
          <span>{this.state.dislikes}</span>
        </div>
      </div>
    );
  };
};


export default DislikeVideoComponent;