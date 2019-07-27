
import React from 'react';


class LikeVideoComponent extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    // this.state = this.props.likes;
  }

  componentDidMount() {
    // debugger
    this.props.getLikes(this.props.videoId);
  }

  // componentDidUpdate() {
    // debugger
    // this.props.getLikes(this.props.videoId);
  // }

  handleLike(e) {
    // debugger
    e.preventDefault();
    let currentUser = this.props.currentUser;
    if (currentUser) {
      
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