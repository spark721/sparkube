
import React from 'react';
import NavTop from '../nav_top/nav_top';
import SideIndexContainer from './side_index_container';

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

            <div className='author-description-div'>
              <div className='author-div'>
                <span className='author-text'>author_id: {this.props.video.author_id}</span>
                <br />
                <span className='date-text'>Published on Jul 7, 2019</span>
              </div>
              <div className='description-div'>
                <p>{this.props.video.description}</p>
              </div>
            </div>
          </div>

          <div className='video-show-index'>
            <SideIndexContainer />
          </div>
        </div>
      </div>
    );
  };
};

export default VideoShow;