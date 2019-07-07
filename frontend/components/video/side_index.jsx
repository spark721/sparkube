
import React from 'react';
import SideIndexItem from './side_index_item';

class SideIndex extends React.Component {

  componentDidMount() {
    this.props.getVideos();
  }

  render() {
    let videos = this.props.videos.map((video, i) => {
      return <SideIndexItem
        key={i}
        video={video} />;
    });

    return (
      <div className='video-index-splash-whole'>
        <div className='video-index-splash'>
          <ul className='video-index-splash-ul'>{videos}</ul>
        </div>
      </div>
    );
  };
};

export default SideIndex;