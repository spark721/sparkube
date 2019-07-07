
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
            <div className='video-show-title-div'>
              <span className='video-show-title-text'>{this.props.video.title}</span>
              <div className='video-show-stats-div'>
                <span className='video-show-views-text'>40,588,087 views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default VideoShow;