
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
      <div className='side-index-splash-whole'>
        <div className='side-index-splash'>
          <ul className='side-index-splash-ul'>{videos}</ul>
        </div>
      </div>
    );
  };
};

export default SideIndex;