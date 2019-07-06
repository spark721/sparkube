
import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {

  componentDidMount() {
    this.props.getVideos();
  }

  render() {
    let videos = this.props.videos.map( (video, i) => {
      return <VideoIndexItem 
              video={video}
              key={i} />;
    });

    return (
      <div>
        <ul>{videos}</ul>
      </div>
    );
  };
};

export default VideoIndex;