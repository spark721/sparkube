
import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {

  componentDidMount() {
    // debugger
    this.props.getVideos();
  }

  render() {
    // debugger
    let videos = this.props.videos.map( (video, i) => {
      return <VideoIndexItem 
              key={i}
              video={video} />;
    });

    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    return (
      <div className='video-index-splash-whole'>
        <div className='video-index-splash'>
          <ul className='video-index-splash-ul'>{shuffle(videos)}</ul>
        </div>
      </div>
    );
  };
};

export default VideoIndex;