
import React from 'react';
import NavTop from '../nav_top/nav_top';

class VideoShow extends React.Component {

  componentDidMount() {
    this.props.getVideo(this.props.match.params.videoId);
  };

  render() {
    if (!this.props.video) {
      return (
        <div>Loading</div>
      );
    }
    return (
      <div>
        <NavTop />      
        <div className='video-show-page-whole'>
          <div className='video-show-page'>
            <video width='100%' className='video-show-player' controls>
              <source
                src={this.props.video.videoUrl}
                type="video/mp4" />
            </video>
            <h1>title: {this.props.video.title}</h1>
          </div>
        </div>
      </div>
    );
  };
};

export default VideoShow;