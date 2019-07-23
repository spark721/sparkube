
import React from 'react';

class DislikeVideoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.dislikes;
  }

  handleDislike() {
    
  }

  render() {
    return (
      <div>
        <div className="dislikes-count"
             onClick={this.handleDislike.bind(this)} >
          <i className="fas fa-thumbs-down"></i>
          <span>{Object.keys(this.state).length}</span>
        </div>
      </div>
    );
  };
};


export default DislikeVideoComponent;