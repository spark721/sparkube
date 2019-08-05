
import React from 'react';

class DislikeVideoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dislikes: this.props.dislikes,
      curUserLikes: this.props.curUserLikes,
      curUserDislikes: this.props.curUserDislikes,
    };
  };

  handleDislike(e) {
    
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